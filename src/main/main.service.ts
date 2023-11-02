import { Injectable } from '@nestjs/common';

@Injectable()
export class MainService {
    private counterId = 1;
    private sonaAssets: any = [
        {
            "profile_name": "IWC Schaffhausen",
            "profile_image": "https://cdn.xaxiscreativestudios.com/APAC/2023/Test/Prueba_Tecnica_XCS/profile_image.png",
            "post_description": "Lewis Hamilton introduces the new Big Pilot's Watch 43, an iconic and minimal design for the modern adventurer.",
            "post_cta": "Discover More",
            "icons": "https://cdn.xaxiscreativestudios.com/APAC/2023/Test/Prueba_Tecnica_XCS/Icons.svg",
            "slides": [
                {
                    "img": "https://cdn.xaxiscreativestudios.com/APAC/2023/Test/Prueba_Tecnica_XCS/slide_1.jpg",
                    "description": "Engineered for originals"
                },
                {
                    "img": "https://cdn.xaxiscreativestudios.com/APAC/2023/Test/Prueba_Tecnica_XCS/slide_2.jpg",
                    "description": "Bold and precise"
                },
                {
                    "img": "https://cdn.xaxiscreativestudios.com/APAC/2023/Test/Prueba_Tecnica_XCS/slide_3.jpg",
                    "description": "Made in Switzerland"
                },
                {
                    "img": "https://cdn.xaxiscreativestudios.com/APAC/2023/Test/Prueba_Tecnica_XCS/slide_1.jpg",
                    "description": "Engineered for originals"
                },
                {
                    "img": "https://cdn.xaxiscreativestudios.com/APAC/2023/Test/Prueba_Tecnica_XCS/slide_2.jpg",
                    "description": "Bold and precise"
                },
            ]
        }
    ];

    findAll() {
        return this.sonaAssets;
    }

}
