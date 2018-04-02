<section id="perfil">
    <br><br>
        <div class="container" id="informacion">
            <div class="row">
                <div class="col-md-3"> <img src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>"> </div>
                <div class="col-md-9">
                    <h2><?php the_title(); ?></h2>
                    <p><b>Partido:</b> <?php echo get_field("partido");?></p>
                    <p><b>Edad:</b> <?php echo get_field("edad");?></p>
                    <p><b>Nacimiento:</b> <?php echo get_field("nacimiento");?></p>
                    <p><b>Estudios:</b> <?php echo get_field("estudios");?></p>
                    <p><b>Estado Civil:</b> <?php echo get_field("estado-civil");?></p>
                    <p><b>Redes sociales:</b> <?php echo get_field("redes");?></p>
                </div>
            </div>
            <br>    
            <div class="row">
                <div class="col-md-12">
                    <h2>Propuestas</h2>
                    <?php echo get_field("propuestas");?>
                </div>
            </div>
        </div>
 </section>