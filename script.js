const mountainArray = [
	{
		title: 'COPPER MOUNTAIN',
		content: 'Copper Mountain is a mountain and ski resort located in Summit County, Colorado, about 75 miles (120 km) west of Denver on Interstate 70. The resort has 2,465 acres (10.0 km2) of in-bounds terrain under lease from the U.S. Forest Service, White River National Forest, Dillon Ranger District. It is operated by Powdr Corporation.'
	},
	{
		title: 'WINTER PARK',
		content: 'Winter Park Resort is an alpine ski resort in Winter Park, Colorado in the Rocky Mountains. Located just off U.S. Highway 40, the resort is about a 90-minute drive from Denver, Colorado. The mountain opened for the 1939–1940 season as Winter Park Ski Area and was owned and operated by the city and county of Denver until 2002, when Denver entered into a partnership with Intrawest ULC, a Canadian corporation headquartered in Vancouver, British Columbia, which has operated the resort since then. For nearly 70 years, a popular way for Denver residents to get there was via the Ski Train, which arrived at the resort\'s base area through the Moffat Tunnel.'
	},
	{
		title: 'CRESTED BUTTE',
		content: 'Crested Butte is a home rule municipality in Gunnison County, Colorado, United States. The town population was 1,487 at the 2010 United States Census. The former coal mining town is now called "the last great Colorado ski town". Crested Butte is a destination for skiing, mountain biking, and a variety of other outdoor activities. The Colorado General Assembly has designated Crested Butte the Wildflower Capital of Colorado.'
	},
	{
		title: 'STEAMBOAT',
		content: 'Steamboat Resort is a major ski area in northwestern Colorado, operated by the Steamboat Ski & Resort Corporation in Steamboat Springs. It is located on Mount Werner, a mountain in the Park Range in the Routt National Forest. The ski area first opened on January 12, 1963. The ski area has 165 named trails spread over 2,965 acres (12.00 km2). Fourteen percent are classified as beginner level, forty-two percent as intermediate, and forty-four percent as advanced. It also contains the Mavericks Superpipe snowboard/skiing superpipe one of the premier pipes in North America.',
	}
];

const changeTab = (e) => {
	$('.tab').removeAttr('id');
	$(e.target).attr('id', 'tabs--active');
	accordionContent();
};

const accordionContent = () => {
	const tabIndex = $('#tabs--active').val();
	const mountainInfo = mountainArray[tabIndex];

	$('.mountain-info').html(
		`
		<h3 class="mountain">${mountainInfo.title}</h3>
		<p class="description">${mountainInfo.content}</p>
		`
	);
}

$(document).ready(() => accordionContent())

$('.tab').on('click', changeTab);
