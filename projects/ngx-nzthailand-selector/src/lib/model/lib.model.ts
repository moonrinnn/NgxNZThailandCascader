export interface iNZOption {
	value: number|string;
	label: string;
	children?: iNZOption[],
	isLeaf?: boolean;
}
export interface iThailandAddress {
	city_id?: string,
	city_name?: string,
	district_id?: string,
	district_name?: string,
	subdistrict_id?: string,
	subdistrict_name?: string,
	zipcode?: string
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

export interface iConfig {
  placeholder?: string,
  size?: 'small'|'default'|'large',
  showSearch?: boolean,
  disabled?: boolean
}
