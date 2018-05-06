 <section id="candidatos">
        <div class="container">
            <div class="row">
                <div class="col-md-12 center">
                    <br><br>
                    <h2>Los</h2>
                    <h1>Presidenciables</h1>
                </div>
            </div>
            <div class="row m-sides-100" id="presidentes">
				<?php while ( have_posts() ) : the_post(); ?>
				<div class="col-md-3 center">
					<a href="<?php echo get_permalink(); ?>"><img src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>"></a>
					<h3><?php the_title(); ?></h3>
				</div>
			<?php endwhile; // end of the loop. ?>
            </div>
        </div>
</section>
