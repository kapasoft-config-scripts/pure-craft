<template>
    <section class="hero-header hero-default dark_overlay parallax-window" data-section-type="canvas_circles"
				data-src="http://via.placeholder.com/1920x1080">
				<div class="canvas-wrapper" id="canvas-parent">
					<canvas id="canvas-hero"></canvas>
				</div>
				<div class="container hero-content hero-center d-flex align-items-center">
					<div class="content-default">
						<h1 class="display-3 content-heading bold-heading z-index-100" data-aos="zoom-in"
							data-aos-delay="900" data-aos-duration="700" data-aos-easing="ease-in-out">
							We provide high quality and cost effective services
							<span class="highlight">.</span>
						</h1>
						<p class="subtitle z-index-100" data-aos="zoom-in" data-aos-delay="1100" data-aos-duration="700"
							data-aos-easing="ease-in-out">Publish what you think, don’t put it on social media</p>
						<div class="social-type-2 d-flex flex-wrap justify-content-center" data-aos="zoom-in"
							data-aos-delay="1300" data-aos-duration="700" data-aos-easing="ease-in-out">
							<a class="social-box facebook-h" href="#">
								<i class="fab fa-facebook-f"></i>
							</a>
							<a class="social-box instagram-h" href="#">
								<i class="fab fa-instagram"></i>
							</a>
							<a class="social-box twitter-h" href="#">
								<i class="fab fa-twitter"></i>
							</a>
							<a class="social-box linkedin-h" href="#">
								<i class="fab fa-linkedin-in"></i>
							</a>
							<a class="social-box google-plus-h" href="#">
								<i class="fab fa-google-plus-g"></i>
							</a>
						</div>
					</div>
					<div class="angle-down" data-aos="zoom-in" data-aos-anchor=".hero-header" data-aos-delay="1300"
						data-aos-duration="700" data-aos-easing="ease-in-out">
						<p>scroll down</p>
						<i class="fa fa-chevron-down"></i>
					</div>
				</div>
			</section>
</template>

<script>
export default {
    name: 'HeroHeaderBlock',
    props: {
    }
}
</script>

