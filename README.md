# PQ Phaser

A set of tools and utility functions/classes for building web games in Phaser 3.

**This library is currently in a very, very early stage.** I'm just making a tiny Phaser game every now and then (usually in 1 or 2 days) and building it out as I go, but this process has barely started.

It's all raw TypeScript. Just import whatever you need from "@pandaqi/pq-phaser". (You can also use the full path to each file, but that's obviously not recommended.) 

This system of exporting everything at the root level has the advantages that ...

* The internals of the library can change, things can be reorganized, but the end-user (and the applications using this) don't need to care. Their import stays the same and stays valid.
* It only includes the things you actually use. Everything else is not bundled with your game, which can save a _lot_ of code/file size.

I tried to "compile" it down to JavaScript as well, but couldn't find a way that worked cleanly and produced the results I wanted. (Because of relying on Phaser Types as well, it would have to include the entire Phaser library too, which would balloon this small utility project to a ludicrous size and---meh.)

I have no idea how any of this Node package stuff works, so let me know if I'm doing something stupid or how to distribute this better.

<!--- 
Good article on Typescript NPM publishing:

https://pauloe-me.medium.com/typescript-npm-package-publishing-a-beginners-guide-40b95908e69c
--->

<!---
The article ( + attached GitHub repo) that showed me how to set this up for tree-shaking, full types support, etcetera:

https://mparavano.medium.com/build-a-javascript-util-library-for-npm-with-es6-modules-and-commonjs-9e78b51e3714
--->