const screens = {
    xlarge: 1920,
    large: 1200,
    tablet: 1024,
    phone: 550
}

export enum UI_SCREENS {
    large = 1,
    tablet,
    phone
}

export enum UI_SCREEN_SIZES {
    xlarge = screens['xlarge'],
    large = screens['large'],
    tablet = screens['tablet'],
    phone = screens['phone']
}

export enum CARD_IMG_WIDTH {
    xlarge = (screens['xlarge'] / 4),
    large = (screens['large'] / 4),
    tablet = (screens['tablet'] / 5),
    phone = (screens['phone'] * 0.7)
}
