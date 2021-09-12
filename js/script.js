'use strict';

const electricianBtn = document.querySelectorAll('#blog .categories .electrician');
const wallsBtn = document.querySelectorAll('#blog .categories .walls');
const waterSupplyBtn = document.querySelectorAll('#blog .categories .waterSupply');
const ceilingsBtn = document.querySelectorAll('#blog .categories .ceilings');
const floorCoveringsBtn = document.querySelectorAll('#blog .categories .floorCoverings');
const furnitureBtn = document.querySelectorAll('#blog .categories .furniture');
const layingTilesBtn = document.querySelectorAll('#blog .categories .layingTiles');
const appliancesBtn = document.querySelectorAll('#blog .categories .appliances');
const decorativeElementsBtn = document.querySelectorAll('#blog .categories .decorativeElements');
const smartHouseBtn = document.querySelectorAll('#blog .categories .smartHouse');

const electricianSwpr = document.querySelectorAll('#blog .myswpr .electrician');
const wallsSwpr = document.querySelectorAll('#blog .myswpr .walls');
const waterSupplySwpr = document.querySelectorAll('#blog .myswpr .waterSupply');
const ceilingsSwpr = document.querySelectorAll('#blog .myswpr .ceilings');
const floorCoveringsSwpr = document.querySelectorAll('#blog .myswpr .floorCoverings');
const furnitureSwpr = document.querySelectorAll('#blog .myswpr .furniture');
const layingTilesSwpr = document.querySelectorAll('#blog .myswpr .layingTiles');
const appliancesSwpr = document.querySelectorAll('#blog .myswpr .appliances');
const decorativeElementsSwpr = document.querySelectorAll('#blog .myswpr .decorativeElements');
const smartHouseSwpr = document.querySelectorAll('#blog .myswpr .smartHouse');

const swpr = document.querySelectorAll('#blog .myswpr .swpr');



const hideSwpr = () => {
	swpr.forEach(swpr => {
		swpr.classList.remove('swiper-wrapper');
		swpr.classList.add('hidden');
	});
}



electricianBtn[0].onclick = () => {
	hideSwpr();

	electricianSwpr[0].classList.add('swiper-wrapper');
	electricianSwpr[0].classList.remove('hidden');
}

wallsBtn[0].onclick = () => {
	hideSwpr();

	wallsSwpr[0].classList.add('swiper-wrapper');
	wallsSwpr[0].classList.remove('hidden');
}

waterSupplyBtn[0].onclick = () => {
	hideSwpr();

	waterSupplySwpr[0].classList.add('swiper-wrapper');
	waterSupplySwpr[0].classList.remove('hidden');
}

ceilingsBtn[0].onclick = () => {
	hideSwpr();

	ceilingsSwpr[0].classList.add('swiper-wrapper');
	ceilingsSwpr[0].classList.remove('hidden');
}

floorCoveringsBtn[0].onclick = () => {
	hideSwpr();

	floorCoveringsSwpr[0].classList.add('swiper-wrapper');
	floorCoveringsSwpr[0].classList.remove('hidden');
}

furnitureBtn[0].onclick = () => {
	hideSwpr();

	furnitureSwpr[0].classList.add('swiper-wrapper');
	furnitureSwpr[0].classList.remove('hidden');
}

layingTilesBtn[0].onclick = () => {
	hideSwpr();

	layingTilesSwpr[0].classList.add('swiper-wrapper');
	layingTilesSwpr[0].classList.remove('hidden');
}

appliancesBtn[0].onclick = () => {
	hideSwpr();

	appliancesSwpr[0].classList.add('swiper-wrapper');
	appliancesSwpr[0].classList.remove('hidden');
}

decorativeElementsBtn[0].onclick = () => {
	hideSwpr();

	decorativeElementsSwpr[0].classList.add('swiper-wrapper');
	decorativeElementsSwpr[0].classList.remove('hidden');
}

smartHouseBtn[0].onclick = () => {
	hideSwpr();

	smartHouseSwpr[0].classList.add('swiper-wrapper');
	smartHouseSwpr[0].classList.remove('hidden');
}