<?php
/**
 * Template Name: quizResponses
 */
?>

<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/content', 'quizResponses'); ?>
<?php endwhile; ?>
