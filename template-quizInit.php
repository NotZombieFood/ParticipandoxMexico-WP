<?php
/**
 * Template Name: quizInit
 */
?>

<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/content', 'quizInit'); ?>
<?php endwhile; ?>
