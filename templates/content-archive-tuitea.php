<section id="tuitea-archive-titulo">
	
</section>



<?php while ( have_posts() ) : the_post(); ?>
                 
<h1 class="entry-title"><?php the_title(); ?></h1>
 
<div class="entry-content">
 
<?php the_content(); ?>
 
 
</div><!-- .entry-content -->
 
<?php endwhile; // end of the loop. ?>