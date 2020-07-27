# Node Colors
Una libreria de colores para NodeJS

A veces quieres imprimir una linea en consola pero con otro color
si has buscado en internet como hacerlo seguro habras encontrado unos
codigos muy extraños y dificiles de recordar.

Color es una libreria con todos esos codigos.

## Como usar

Solo descargala y escribe:

```javascript
const color = require("/ruta/del/archivo/colors.js");
```
Para imprimir algo con color en consola puedes escribir:

```javascript
color.log("texto", color.<color a elegir>);
```

Por ejemplo para escribir algo rojo seria:

```javascript
color.log("texto", color.fg.Red);
```

Esto simplemente es lo mismo que si escribieras:

```javascript
console.log("\x1B[31m%s\x1B[0m", "texto");
```
La libreria completa de color es esta:

```javascript
Color {
  Reset,
  Bright,
  Dim,
  Underscore:,
  Blink,
  Reverse,
  Hidden,
  fg: {
    Black,
    Red,
    Green,
    Yellow,
    Blue,
    Magenta,
    Cyan,
    White'
  },
  bg: {
    Black,
    Red,
    Green,
    Yellow,
    Blue,
    Magenta,
    Cyan,
    White
  }
}
```
