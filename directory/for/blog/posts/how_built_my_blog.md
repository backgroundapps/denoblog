---
title: How I've Built a blog using Deno and Gitpod!
publish_date: 2022-07-09
---

# How I've Built a blog using Deno and Gitpod!

## Important Information

- [Deno.env] provides the environment variables.
- [Deno.blog] runs a program in a modified environment.

## Gitpod setup for Deno
- First of all, create a repo on your github account. Ex "https://github.com/denoblogsample"
- Now add on the repo url the gitpod shortcut. Ex "gitpod.com/#https://github.com/denoblogsample"
- After being redirected to the gitpod page run the following command on the gitpod terminal "curl -fsSL https://deno.land/install.sh | sh"
- Now create the env variable DENO_INSTALL and add it on the PATH.
    - One option could be add the variables on the .bashrc file
    - Open the .bashrc file by typing the follogin comand on terminal "vim ~/.bashrc"
    - Enable the edition mode by pressing "I" from your keyboard
    - Go to the end of the file, add the command export DENO_INSTALL="/home/gitpod/.deno" and export PATH="$DENO_INSTALL/bin:$PATH"
    - To close vim just press the key ESC and type :wq (It will save your change and close vim)
- Considering that you were able to install deno and add the env variables, now it is time to create you deno blog

## Deno Blog Setup
- On Terminal, Just type: deno run -r --allow-read --allow-write https://deno.land/x/blog/init.ts ./directory/for/blog/
- Go to the ./directory/for/blog/ folder and type deno task dev
- And you are done bro!!!

<!----------------------------------------------------------------------------->

[Deno.env]: https://doc.deno.land/deno/stable/~/Deno.env
[Deno.blog]: https://deno.land/x/blog@0.5.0