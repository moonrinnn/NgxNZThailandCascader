export interface iNZOption {
	value: number|string;
	label: string;
	isLeaf?: boolean;
}
export interface iProvince {
	city_id: string,
	city_name: string,
	ref_country_id: string
}
export interface iDistrict {
	district_id: string,
	district_name: string,
	ref_city_id: string
}
export interface iSubDistrict {
	subdistrict_id: string,
	subdistrict_name: string,
	ref_district_id: string,
	zipcode: string
}
