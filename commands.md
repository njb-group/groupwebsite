**tell git who you are**

$ git config --global user.name "Sam Smith"
$ git config --global user.email sam@example.com // these commands
are for linking the repositories to your github account.

**create a new local repo**

$ git init // this command creates a git repository on your
local machine.

**add files**

$ touch // this command creates files.
$ git add // this command places the files in the staging area.
(<>filename) // adds specific file to the staging area.
(*) // the asterisk adds all same file types.
(.) // the dot adds all file types.

**status**

$ git status // this command give the status of files added
to the repository.

**commits**

$ git commit // this file commits the changes made to files.
(-m 'commit message') // commits changes to head but not remote.
(-a) // commits all files added using git and all changed
after the fact.

**connect a remote repository**

$ git remote add origin <server>// connects local repository
to remote server repository.
$ git remote -v // lists all currently configured repositories.

**push**

$ git push origin master // pushes commits to remote repository.

**view a local repo**

$ git clone // this command clones a repository.
(/path/to/repository) // clones local repository.
(username@host:/path/to/repository) // clones remote repository.

**updating from the remote repository**

$ git pull // fetch and merges changes on the remote server
to your machine copy.
$ git merge <branchname> // merges a different branch onto
our active branch.
$ git diff // view all the merge conflicts.
$ git diff --base <filename> // view the conflicts against
the base file.
$ git add <filename> // marks the file as changes after the
conflicts have been resolved.
$ git diff <sourcebranch> <targetbranch> // preview changes
before merging.

**branches**

$ git checkout <branchname> // switch to the other branch.
git checkout -b <branchname> // creates a new branch and switches to it.
$ git branch // lists all branches in the repo and tells
you which one you are in.
$ git branch -d <branchname> // delete the branch.
$ git push origin <branchname> // pushes branch to the remote
repository it belongs to.
$ git push --all origin // pushes all branches to the remote
repository.
$ git push origin :<branchname> // delete the branch on the
remote repository.

**tags** // not entirely sure what these are used for but
will update as soon as I know more.

$ git tag 1.0.0 <commitID> // use this command to mark changeset.
$ git log
$ git push --tags origin

**undo local changes** // again unsure of the purposes of
these commands will update when i have a better understanding.

$ git checkout -- <filename> // this command is used to replace
changes in your working tree with the last content in the head.
$ git fetch origin //
$ git reset --hard origin/master //

**search** // more of the same.

$ git grep 'foo()' //
