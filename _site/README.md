# Nightslayer
===================
Stitch Fix Engineering & Analytics

# Get Started
===================
    git clone 

## Rake tasks
===================
#### rake dev
     jekyll --server --auto

Sets up jekyll server for dev on port 4000. Site is regenerated everytime you save a file. 
NOTE: Changing _config.yml will require a restart of the jekyll server to see changes.
To restart server, go to terminal tab that server is running in then press
    ctrl+C ⇧  enter

#### rake sass
     sass --watch _sass:css 

Starts Sass polling to regenerate css on file save. 

## Notes
Example posts are in ./_posts/
There are two layouts, one for posts, one for other pages. Layouts are stored, creatively, in 
    nightslayer/_layouts/
Folders with an underscore are not copied over to _site. 

