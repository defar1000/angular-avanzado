import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  dataGraficas = [
    [{
      title: 'Ventas',
      labels: [ 'Tornillo', 'Boton', 'Luces' ],
      data: [
        { data: [ 100, 40, 70 ],
          backgroundColor: ['#6857E6', '#009FEE', '#FFB414']
        },
      ]
    },
    {
      title: 'Compras',
      labels: [ 'Pan', 'Refresco', 'Tacos' ],
      data: [
        { data: [ 10, 2, 20 ],
          backgroundColor: ['#6857E6', '#009FEE', '#FFB414']
        },
      ]
    }],
    [{
      title: 'Cambios',
      labels: [ 'Licuadora', 'Horno', 'Aspiradora' ],
      data: [
        { data: [ 20, 40, 60 ],
          backgroundColor: ['#6857E6', '#009FEE', '#FFB414']
        },
      ]
    },
    {
      title: 'Inventario',
      labels: [ 'Camisas', 'Pantalones', 'Tenis', 'Correas' ],
      data: [
        { data: [ 3, 9, 27, 15 ],
          backgroundColor: ['#6857E6', '#009FEE', '#FFB414', '#38DC3F']
        },
      ]
    }]
  ]

}
