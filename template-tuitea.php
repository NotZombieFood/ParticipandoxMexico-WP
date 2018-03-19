<?php
/**
 * Template Name: Tuitea
 * Template Post Type: single-tuitea
 */
?>

<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/content', 'tuitea'); ?>
<?php endwhile; ?>
