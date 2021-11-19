import cloudinary from 'cloudinary';

import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({ 
    cloud_name: 'dlewsifaq', 
    api_key: '639835313159267', 
    api_secret: 'BsL-m4XvJRWlTfqRz0Fle3ypNlM',
    secure: true
  });


describe('Pruebas en fileUpload', () => {

    test('Debe cargar un archivo a "cloudinary" y retornar un "url"', async() => {
        const imgUrl = 'https://image.flaticon.com/icons/png/128/3063/3063076.png';
             
        const resp = await fetch(imgUrl);   
        const blob = await resp.blob();
      
        const file = new File([blob], 'foto.png');
        const urlReturned = await fileUpload( file );
      
        expect( typeof urlReturned ).toBe('string');
      
        // Borrar imagen para que nuestra cuenta no se llene
        const segments = urlReturned.split('/');
        const imageID = segments[ segments.length -1 ].replace('.png',''); 
 
        // Fn de la API cloudinary para borrar la imagen subida
        cloudinary.v2.api.delete_resources(`${imageID}`, {}, ()=> {

        });

     });


    test('debe retornar un error', async() => {

        const file = new File([], 'foto.png');
        const url = await fileUpload( file );

       expect( url ).toBe(null);

    });
    
})
