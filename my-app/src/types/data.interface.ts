export interface PageInfo {
	page: number;
	size: number;
	total: number;
	pages: number;
}

export interface Meta {
	checkSum: null;
	pageInfo: PageInfo;
}

export interface Price {
	tag: number;
	real: number;
	discountRate: number;
	maxDiscountPrice: number;
	maxDiscountRate: number;
}

export interface Product {
	code: string;
	name: string;
	statusCode: string;
	brandName: string;
	brandId: number;
	price: Price;
	url: string;
	isFavorite: boolean;
	isSoldOut: boolean;
	deliveryFeeCode: string;
	badges: null;
}

export interface Data {
	meta: Meta;
	body: Product[];
}

export interface ApiResponse {
	status: number;
	data: {
		status: number;
		data: Data;
	};
}
