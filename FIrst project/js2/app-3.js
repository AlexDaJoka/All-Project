gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.container',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	let items = gsap.utils.toArray('.background .card')
	items.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -100 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-900',
				end: 'top',
				scrub: true
			}
		})
	})
		let itemY = gsap.utils.toArray('.card-position6 .card2')
	itemY.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -100 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-900',
				end: 'top',
				scrub: true
			}
		})
	})
	let item = gsap.utils.toArray('.why .why-1')
	item.forEach(item => {
		gsap.fromTo(item, { opacity: 0, y: -100 }, {
			opacity: 1, y: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: 'top',
				scrub: true
			}
		})
	})
		let itemK = gsap.utils.toArray('.text-why .why-container')
	itemK.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 200 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: 'top',
				scrub: true
			}
		})
	})


}

gsap.from('.menu',{
opacity:0,
duration:2,
delay:1,
y:30
})

gsap.from('.header h1',{
opacity:0,
duration:2,
delay:1,
x:-30,
})
gsap.from('.naw-item2',{
opacity:0,
duration:2,
delay:2,
x:-30
})
gsap.from('.perfect a',{
opacity:0,
duration:1,
delay:1,
y:-30
})

