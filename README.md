**Elementos necesarios:**
  *Descargar e Instalar:
  *Visual Studio Code
  *Git
  *Node.js (16.15)

---
**Iniciando un proyecto**
  * ```$ npm init -y```                         Inicia el proyecto y crea \_package.json\_ por default  
  * ```$ npm i express```                       Instalamos el entorno de trabajo Express
  * ```$ npm i dotenv```                        Instalamos Dotenv para controlar variables de entorno
  
  * ```$ npm i --save-dev sequelize ```         Instalamos Sequelize para manejar comunicación con Base de Datos [Click Aquí para más Info](https://www.npmjs.com/package/sequelize)
  * ```$ npm i mysql2```                        Agregar uno de los DB del link de la linea de arriba
  * Creamos el archivo ```.sequelizerc``` [Copiamos esto en el archivo](https://sequelize.org/docs/v6/other-topics/migrations/#the-sequelizerc-file) [Agregando ``'src',`` en las 4 lineas de los paths]
  * ```$ npm i --save-dev sequelize-cli```      Agregamos una terminal propia de Sequelize
  * ```$ npm install --save-dev nodemon```      Instalamos la utilidad de inferfaz Nodemon (Wrapper) 
  * ```$ npm install --save-dev mocha```        Instalamos Mocha.js, dependencia para testing
  * ```$ npm i chai```                          Instalamos Chai.js, dependencia para testing
  * Creamos el archivo ```.gitignore```[Click Aquí](https://github.com/github/gitignore/blob/main/Node.gitignore)
  * Creamos el archivo ```index.js``` como principal
  * Creamos el archivo ```.env```  para manejar las variables de entorno
  * Creamos el archivo ```.gitignore```

  * Creamos las carpetas para el desarrollo ```./src/entities```, ```./src/repositories``` y ```./test```

---  
**Iniciando el Proyecto**
   * 
   * ```$ npm i --production=false``` para instalar devDependencies de *.json de configuracion
   * ```$ npm run dev``` para ejecutar el servidor con nodemon
   * ```$ npx sequelize-cli init``` para incorporar una Barra de herramientas de sequelize
   
