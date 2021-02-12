<!--- Porting my Old Games to the Web -->
<!--- 02/06/2021 -->
<!--- Kyle Owsen -->
<!--- I ported two old games I made with Monogame to the web, and it was a bit of a nightmare. -->

---

**tl;dr** I ported two old games I made with Monogame to the web, and it was a bit of a nightmare. You can play them [here](https://static.kylebyte.com/maze) and [here](https://static.kylebyte.com/shape)!

---

## Porting my Old Games to the Web

*02/12/2021*

The best part of making web games is that your friends might actually play them since it requires basically no effort on their end.

I built some games a few years ago that I thought were interesting, but since I made them in [Monogame](https://www.monogame.net/) (the same engine that powers Stardew Valley) I had no easy way to share them without telling people to install a mystery APK on their phone.

And so began my quest to port these games to the web to put off doing actual work on a new game.

### Monogame

Monogame's a pretty light wrapper around OpenGL so none of the code I wrote was super specific to the engine. For the most part, it's portable C# code (built around my trusty old [Entity Component System](https://github.com/kowsen/Minotaur)) that just uses Monogame as its I/O layer. For example, if we want to draw some texture to the screen, all we do is call something like this every frame with its current position:

```
spriteBatch.Draw(texture, new Vector2(x, y));
```

This should hopefully make things pretty easy to port, since I just need to find an engine that

- Uses C#
- Has all the I/O features I used in my games
- Exports to the web

Since Unity's the industry leading game engine with great support for web exports and C#, it was the obvious choice..

### Godot

...but that didn't stop me from using Godot. Godot lured me in with its promise of being free and open source, and I've really enjoyed using it for another game project (that I'm excited to share with you soon). I ended up mostly not regretting using it.

In version 3, Godot added [support for C#](https://docs.godotengine.org/en/stable/getting_started/scripting/c_sharp/c_sharp_basics.html) alongside its native GDScript. While you're not "supposed" to directly draw stuff onto the screen every frame like my game logic does, the [CanvasItem](https://godotsharp.net/api/3.2.0/Godot.CanvasItem/) object exposes methods that should let us do just that.

Unfortunately, the C# support is still pretty new and not fully implemented. I wouldn't realize how this was gonna hurt me until I started porting over my first game.

### Maze Frenzy

Maze Frenzy is actually [on the Play store](https://play.google.com/store/apps/details?id=com.kylebyte.mazegame) so folks can play it if they want, but it isn't super convenient to install an app just to check out a game so I still wanted to port it. Plus, Apple booted me off the app store because I didn't update my app for a new iOS version so it'd be nice to get it working on any phone.

My hope was that it'd be easy to port over since I wasn't doing anything too wacky. All I'd need to build a wrapper for are touch / keyboard input, and drawing basic textures to the screen. After a couple hours of porting over the draw calls and setting things up in Godot, the game was looking almost right.

<div class="blog-image">
	<a href="/posts/assets/maze-before.png">
		<img src="/posts/assets/maze-before.png" alt="Before and after">
	</a>
	<p>Exactly as I remember it</p>
</div>

This might look like pixel soup, but getting something to output pixel soup is like 90% of the battle. All I needed to do from here was tweak colors and draw positions to get everything looking right.

<div class="blog-image">
	<a href="/posts/assets/maze-after.png">
		<img src="/posts/assets/maze-after.png" alt="Before and after">
	</a>
	<p>Ok, I guess this looks better</p>
</div>

Turns out, getting this far was the easy part.

#### Carving Mazes

Maze Frenzy generates all of its mazes on the fly in 6x8 chunks as the playfield is scrolling. On a PC, [the recursive backtracking algorithm it uses](https://weblog.jamisbuck.org/2011/2/7/maze-generation-algorithm-recap) is fast enough to run in a single frame with plenty of room to spare. Unfortunately, this isn't true when the logic's been sloppily ported over to another engine and then compiled for web.

The native mobile version actually had the same issue on low-spec mobile devices, so when I originally built this I ran the carving algorithm on another thread. Unfortunately, this is where we hit the limitations of Godot - threading does not work in C# projects that are exported to the web. This meant unless I was ok with a visible stutter every \~2 seconds of gameplay, I'd need to find an alternate way to speed this algorithm up.

#### Coroutines

The key is that I only need to generate a new maze every time the playfield moves down eight spaces. Since I have a lot of extra cycles in any frame where we're not generating a maze, all I need to do is split the maze carving out into multiple frames and run it in those dead times.

It'd be simple to do this in a sort of gross way where we save the in-progress carving info somewhere in the game state and return to it in a later frame, but luckily C# provides a way to effectively pause and resume a function's execution using iterators. [This is the same system Unity uses to build Coroutines](https://www.jacksondunstan.com/articles/3036) and it worked perfectly here.

Now whenever we need to generate a maze, instead of doing it on another thread we just carve it over the course of about five frames.

#### Pooling Mazes

The fun didn't end there. One of Maze Frenzy's mechanics is that when you reach the top of the screen, you blast through the next maze and collect a bonus. What this meant is that there'd be some cases where we wouldn't have five frames to generate the next maze since the screen swings up really quickly to catch you.

<div class="blog-image">
	<a href="/posts/assets/maze-animation.gif">
		<img src="/posts/assets/maze-animation.gif" alt="Animation">
	</a>
	<p>This needs to be smooth</p>
</div>

My probably over-engineered system to fix this is to maintain a pool of mazes to use if we run out of time to build the next maze before it's on the screen. Thankfully, we still have plenty of frames left where not much is happening, so I can just run my coroutine to fill the maze pool during the frames where we aren't carving the next maze.

Now finally, Maze Frenzy isn't stuttering on most devices! You can play it [here](https://static.kylebyte.com/maze) if you're interested. Maybe it'll be more fun now that you know about the pain I went through to get it working.

### Shape Game

Shape Game is a much less polished game that never got released anywhere, which made me doubly want to port it over so I could finally share it with people.

As with before, things started out great.

<div class="blog-image">
	<a href="/posts/assets/shape-before.png">
		<img src="/posts/assets/shape-before.png" alt="Before and after">
	</a>
	<p>You'll have to take my word for it</p>
</div>

My main problem is that along with being generally unoptimized, Shape Game runs a costly algorithm to generate a [Voronoi diagram](https://en.wikipedia.org/wiki/Voronoi_diagram), and it runs it every frame so I can't easily split it like I did with the maze carving.

But I had a stupid plan for how to get around that.

#### The Stupid Plan

Using the same coroutine setup as I did for maze carving, I could split the Voronoi diagram logic over \~5 frames. While normally this would lead to the game only updating the shapes every five frames, we can take the polygons generated at each step and interpolate between them. While this would mean the entire game would run at a five frame delay and we might get some weird results in the interpolated frames, that's a small price to pay for a huge speedup.

So I went through and split the logic out into five frames, only to find that just rendering my polygons still caused a stutter on low-spec devices. If I wanted to get this running on phones, I was gonna need to rewrite pretty much the entire thing, or just get lazy instead.

#### The Lazy Plan

Instead of trying to run at 60fps, the game now runs at 30fps. My long term solution is that eventually computers will be faster, and then I'll bump it back up to 60fps.

<div class="blog-image">
	<a href="/posts/assets/shape-animation.gif">
		<img src="/posts/assets/shape-animation.gif" alt="Animation">
	</a>
	<p>Still hypnotizing at half speed</p>
</div>

Some things just aren't worth the time. You can play it [here](https://static.kylebyte.com/shape), but be warned that you'll need a reasonably good CPU to play without any slowdown, and it might melt your phone.

### Moving On

This was something I wanted to work on to help close a chapter of my professional career before I started a new one. Leaving my job made me think about these games that I made, and about how I didn't have an easy way to show them off to people, even though that's like 90% of the fun of making games.

Maybe someday I'll come back to these and improve them (especially Shape Game since I know there's a fun game in there somewhere), but for now I'm happy to just have them in a state where people can at least try them out while I move on to my next game. I'm excited to share what that'll be with you all once it's a little farther along. Hope I'll see you then!

\- Kyle