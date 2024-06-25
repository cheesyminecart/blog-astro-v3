---
author: Julien (cheesyminecart)
pubDatetime: 2023-08-11T22:30:19.113Z
modDatetime:
title: My Attempt at Web Development - One-Line Solutions Galore
lug: web-dev-trials-tribulations
featured: false
draft: false
tags:
  - stories
  - life
  - coding
ogImage: ""
description: Is web development really accessible from the get-go?
---

Short answer, no.

When it comes to website frameworks, none is more powerful than astro. Sending you straight to the sky, it does nothing but impress, with load times of almost half of what other frameworks for web development provide.

What they don't tell you is that if you've mucked up your installations, continuously adding on packages becomes a lot, lot harder than it's meant to be. How the consequences of my actions make themselves clear!

So take this as a cautionary tale when creating your own website, as you venture into the realm of web development, clasping the hilt of your sword with whitened knuckles.

_DISCLAIMER: I am not trying to sugarcoat anything that had gone wrong as a consequence of bad programming. Most, if not all errors encountered have causes with roots ranging from a lack of understanding about my own abilities or inadequate terminal knowledge at best._

## Trial 1 - Downloading the Modules

As is usual with all web-based tools, it is imperative that a local copy be downloaded onto your system before any edits/customisation can actually be made. The tutorial offered by the website had a rudimentary installation tutorial on display, a few simple commands for the layman to run and install on their device.

Unfortunately for me, all the command lines I was told to run returned errors - primarily because they were intended for the windows OS while I was attempting to install the files onto a mac. Turns out, a Mac doesn't have any sort of user interface when it comes to downloading packages by command prompt. Instead of prompting you to run the installed files as either a user or administrator, my Mac assumed that I was running the files as an administrator. The packages downloaded were therefore automatically assigned the "root" permission to the packages instead of the "user" permission, leading me onto a wild goose chase trying to troubleshoo with what can only be considered a basic knowledge of the terminal - one that wouldn't get me far!

Turns out, one simple command line was all it took to solve most of my website woes. The fact that a solution as elegant as the one presented to me took me almost three days to find had my hands on my head.

## Trial 2 - Website Woes

Once the website was up and my preliminary edits were made, it was time to port it to the web. The tutorial offered several different ways to do this, and I stuck with their "netlify" method. Though I wouldn't be able to create my own domain, there would be virtually no restrictions on my website and therefore allow me the freedom of customisation.

However, even initialising the packages failed. Once again, the packages were unable to build, citing a permissions error. Another fruitless 5 days soared by, with the StackOverflow tabs flooding my screen with the cries of my forefathers.

Eventually, stumbling into one of the aforementioned help forums in a drunken stupor yielded results - it was another one-line, elegant solution that seemed to glow in front of me.

Cue the head in hands scene again.

Now that my website's finally up, it's time to give my verdict - should anyone with only a basic understanding of HTML/CSS, virtually no JavaScript behind their backs, completely unaware about TypeScript and Tailwind CSS attempt to dive down the borehole of website development?

In short, no. Though this was an incredibly valuable learning experience - it was terribly frustrating every step of the way, and it is my utmost belief that nobody harbors the time nor patience to see the art of website development through.

![preset-image](/assets/dev.svg)

_Like what you see? Feel free to [subscribe](https://thespacer-blog.com/subscribe/) to our blog to receive updates whenever we post._
