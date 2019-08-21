import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class FlatironCarousel extends React.Component {

    constructor() {
        super()
        this.state = {
            activeIndex: null
        }
    }

    componentDidMount(){ this.setState({activeIndex:0}) }

    render() {
        return (
            <Carousel autoPlay={true} swipeable={true} showThumbs={false} infiniteLoop={true} interval={3000}>
                <div>
                    <img src="https://lh3.googleusercontent.com/hdJN4w_GLUgv8fGZ4f6cGquCvb0P7jnaUDDGMXBOAlVWgpA1E92wiTq3ZaxHdm66RlqBEwrWa6TfG2bRpriYXM4dh8NdEe_6CPGHVXYkfTzp07-uitBwAAlTgDkcpQVFvZ0f-e2d6vm2Q9-OsHMSen5MAq5WxEV6Eq_6U6g3XZn--Uwj4PzsaafV8UjIMZKLoF-JQz4uVp59S76QsEkFmUKOXeHt1H4hMoYczvSAYdfyE2GpCBjPu1GzRTwMf9wNgIV2Dw8mKxDryB0O2nqnXB-G8cO4l33rABPgX7nhmAtNnd07oC0e4CpkjBa6uCxYjJDtre2PucBP7NcnbYNwvEAou3YM9EVZxUJM1ImE1cylLYk3_QAjVtuOQmFd1oahHPqdlUZfcJ83lqE6tFqVVt4Ex3puxXWFarqcKwLoJR5v24QKRELRI54G8WJy620aC_s2H9haRARBv4o3kMDR-ro9bpgxCu-CJq2zMGidYxYJLAfVXk-F_5rVBBvCuDSLboFxbK2Bn1p-pWeTxbStY_lmf68rYsl4x1aDUfJstag1LO2gorCC_7-sqZYdRvkY8lFI22nYdgoi3OgF9NVXdHCf091Y_kLimSC9epc2gE7NVuFgQUE6H4cAq0YPlH_iWSgCM0NtjdlDi3mYc2l6uUGM8qudEeo=w2104-h1578-no" alt='flatiron people'/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://lh3.googleusercontent.com/nv9ZNODi2ScP3J5XTWy1UA_ymPduU15mphRw_JhhdW3lFNxhWc-qAbT1lQJTlF7B-1eoSDQOfIBWthXUf3Ej1uyyV2s_tixNwzeAZoezc_U5-2V1RP1Bu2OVMsKTxg3PYXBOnsVmeigtv91qb-i8ZiMnLl9xS0ctnCdqsPOu8CkLkM1egTyjGrqYaZeKXqB9fzA2ckESKoWQTbdC4qnaLBqy7cjFuVZoenIi3rb64dOrJJ4AzPRbtNPlFIvURivnfZntrV43P6n0yzoOHWa07d9_dIvICb8WUDSMZe1-FJWaldYHCrZs9Mc7mlxB68S7qpQW0-wWuLUq4ISJ7JR26jgYSpVHjsmNp_Wsl7OBMUTZmAThqDkwh3sa528lH2KVDvPzsWfLDr0575r7QPq6bcIkAUF1lYmN_U9Vfldmaqy6wgTBtp0yxRa6fEQHyUTKiJGSwzBadRrINUFujmACyvV_6RJrH0GD9dSH0MulsdPGfPt8rrdxXwpuTiPkGzNAx0FxGZcixs6SCeO8KwAsY6xlVSJb_NMIvZ7L7MI6BgZiODtVnvxFo_2H8Vq4lFIJT0xy3hSkVg9nU3o7JsWmfQ7dR5fNNTAut_cv1z7NGdRDuFZxocNW4kG8fLsaXHY75_Ntg-gdDTMATzcVaMDBxPiCUvag2tE=w2104-h1578-no" alt='flatiron people'/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://lh3.googleusercontent.com/l5ipEXzYEwUJBun0d7we6kf4XHxHe2EurB5ioNd9Wd6iybxD392N0XIxHvLEeTMODPigmqLq7fDeUW7BPmdx9095pKwhdbgle5J2XsoqoiAkF3JqdceX6tv-deXfi7OPovDr-3v2NwPcbm4MvCBSpyNDCT94anpt9LCSdNWA5M1YPxtpzl-qZzL__j2k7qA5G3X_oqkN4KWLpnhk40e-8UrKaVG0NFPxG6i7DQwLlHjfdmLr_sSKbWNQMaW0-F_Hzr5cyRv6D3uFlnkt2mr1ApEGiMm1XbjiTudFqFiz6vwdlSxrxxHOo_2NlVIGRmOpm0u7HUYdEegGK9yfUdV1naC2gqjPkWCQStaytsg95l4eiqK1Ynu9t04Ekw6slLOdmFB_fTuUPz8fSdIC_nFNajOCT4pBFeztCBDWohbqFdnOhoQx5jvkGa83UGsBC2N0TPygSqhIAs5l_FNnGgBzP0Ynv__l62eAYng6yBymcnc85l8WbyD1SfuL-SpRzF-Jz0Md2drUlddwvw9b4gzcATGrAPsFMa_jcuceGRYdKCeyHCg3OIGR3Z7D4PmuS2IbyfbJEnqZgug5zbtNrQSkaSOnfExcCI87LJDExR-RfIc05iv-KmSannB2dWjpdGnCv8XlI71fkUpdGOrtzSxUs6UTcaV_hGI=w2104-h1578-no" alt='flatiron people'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
    }
}