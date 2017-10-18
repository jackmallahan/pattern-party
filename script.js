const mountainArray = [
	{
		title: 'COPPER MOUNTAIN',
		content: 'Copper Mountain is a mountain and ski resort located in Summit County, Colorado, about 75 miles (120 km) west of Denver on Interstate 70. The resort has 2,465 acres (10.0 km2) of in-bounds terrain under lease from the U.S. Forest Service, White River National Forest, Dillon Ranger District. It is operated by Powdr Corporation.'
	},
	{
		title: 'WINTER PARK',
		content: 'Winter Park Resort is an alpine ski resort in Winter Park, Colorado in the Rocky Mountains. For nearly 70 years, a popular way for Denver residents to get there was via the Ski Train, which arrived at the resort\'s base area through the Moffat Tunnel.'
	},
	{
		title: 'CRESTED BUTTE',
		content: 'Crested Butte is a home rule municipality in Gunnison County, Colorado, United States. Crested Butte is a destination for skiing, mountain biking, and a variety of other outdoor activities. Crested Butte is designated as the Wildflower Capital of Colorado.'
	},
	{
		title: 'STEAMBOAT',
		content: 'Steamboat Resort is a major ski area in northwestern Colorado, operated by the Steamboat Ski & Resort Corporation in Steamboat Springs. The ski area has 165 named trails spread over 2,965 acres. It also contains the Mavericks Superpipe snowboard/skiing superpipe one of the premier pipes in North America.',
	}
];

const changeTab = (e) => {
	$('.tab').removeAttr('id');
	$(e.target).attr('id', 'tabs--active');
	accordionContent();
	if ($(".stacked-info").css("display") == "flex" ){
		appendInfo()
	}
};

const accordionContent = () => {
	const activeTabIndex = $('#tabs--active').val();
	const mountainInfo = mountainArray[activeTabIndex];

	$('.mountain-info').html(
		`
		<h3 class="mountain">${mountainInfo.title}</h3>
		<p class="description">${mountainInfo.content}</p>
		`
	);
}

const openCode = () => {
	window.open('https://github.com/jackmallahan/pattern-party')
}

const checkSize = () => {
  if ($(".stacked-info").css("display") == "flex" ){
		appendInfo()
  }
}

const globalArray = $('.tabs').children();

const appendInfo = () => {
	const activeTabIndex = $('#tabs--active').val();
	const mountainInfo = mountainArray[activeTabIndex];
	const tabsArray = $('.tabs').children();
	const mappedTabs = tabsArray.each((index, tab) => {
	if (tab.hasClass('#tabs--active')){
		$('#tabs--active').css({display: block})
		$('#tabs--active').append(
			`
			<div class="stacked-info">
			<img src="assets/placeholder-square.jpg" alt="An Image Placeholder" class="placeholder-image-stacked">
			<h3 class="mountain">${mountainInfo.title}</h3>
			<p class="description">${mountainInfo.content}</p>
			</div>
			`
		)
	}else {
		$('.tab-content-mobile').remove()
		}
	})
}

$(document).ready(() =>{
	accordionContent();
	checkSize();
})

$('.tab').on('click', changeTab);
$('.view-code-btn').on('click', openCode);
