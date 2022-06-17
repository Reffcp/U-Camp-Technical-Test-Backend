
#  U Camp Technical Test
**🤟🏻Prueba técnica para los futuros instructores y facilitadores de U Camp 🤓💻**

📝El objetivo del test técnico es construir un Back-End que interactua con una API externa.

👀Vamos a usar la API pública de **Mercado Libre**. De ella vamos a extraer publicaciones que luego vamos a guardar en el backend usando un caché.

# Indicaciones realizadas

Usaremos el siguiente endpoint de Mercado Libre `https://api.mercadolibre.com/sites/MLA/search?q={query}`. Recibe un queryString con el parámetro `q` con un string que indica el keyword a buscar. La API retorna un JSON con la siguiente forma:

    {
      "site_id": "MLA",
      "query": "iphone",
      "paging": {},
      "results": [{
      	"id": "MLA851931164",
        "site_id": "MLA",
        "title": "iPhone 11 128 Gb Morado 4 Gb Ram",
        "seller": {},
        "price": 182240,
        ...
      }],
      "secondary_results": [
        ...
      ],
      "related_results": [
      	...
      ],
      "sort": {
        "id": "relevance",
        "name": "More relevant"
      },
      "available_sorts": [],
      "filters": [],
      "available_filters": []
    }

Podemos ver la documentación completa del endpoint en [este link](https://api.mercadolibre.com/sites/MLA/search?q=iphone).

Nuestro Back-End contiene la ruta:

 - `/api/search`

## **`/api/search`**
Esta ruta recibe un queryString con un término de búsqueda. Por ejemplo: `/api/search?query=zapatillas`. Y debe retornar un arreglo de items de Mercado Libre con la forma:

    [
      {
          "id": "MLA785937833",
          "title": "Zapatillas Marca Rcn Ultraliviana Negra",
          "price": 1769,
          "currency_id": "ARS",
          "available_quantity": 200,
          "thumbnail": "http://http2.mlstatic.com/D_728833-MLA32445355209_102019-I.jpg",
          "condition": "new"
      },
      {
          "id": "MLA716347136",
          "title": "Zapatillas Ozono Skate Directo De Fábrica",
          "price": 1769,
          "currency_id": "ARS",
          "available_quantity": 200,
          "thumbnail": "http://http2.mlstatic.com/D_728833-MLA32445355209_102019-I.jpg",
          "condition": "new"
      }
    ]


# Indicaciones para correr el backend
- Correr el comando `npm install` para cargar todas las librerias requeridas
- Este proyecto solo se encuentra en modo desarrollo por lo que tendrás que correr
el comando `npm run dev` para correr el proyecto con nodemon, el cual ya se encuentra en las librerías del archivo package.json

## Extra-Credit: 
- Se crea un caché en cada busqueda, de tal manera que a la siguiente búsqueda no se use la API de Mercado Libre si esta es repetida o tiene los mismos elementos, si no que los datos se recuperen del caché.

