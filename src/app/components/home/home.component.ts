import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  service = [{
    imageUrl: "assets/img/photoshop.png",
    title: "Diseño Web",
    imageBanner: "assets/img/design.jpg",
    description: "Diseño UI/UX, es la mejor forma de atraer un cliente\
                  ya que permite de definir la forma, función, usabilidad,\
                  y otros aspectos, que mejoran la calidad del usuario.   ",
  },{
    imageUrl: "assets/img/code-icon.png",
    title: "Desarrollo Web",
    imageBanner: "assets/img/developer web.jpg",
    description: "Desarrolla tu pagina web conmigo, te asesorare \
                  para que la elaboración sea mas efectiva, y tengas \
                  un producto de calidad.",
  },{
    imageUrl: "assets/img/email.png",
    title: "Email Marketing",
    imageBanner: "assets/img/email marketing.jpg",
    description: "La publicidad por correo electronico, es otra\
                  alternativa para poder llamar a tus futuros clientes. ",
  },

];
  arquitecture = [{
    title: "Modelo Vista Controlador",
    description: "patrón de arquitectura de software, que separa los datos\
                   y la lógica de negocio de una aplicación, permitiendo\
                  la legibilidad del codigo y mantener la aplicacion."
  },
  {
    title: "Cliente Servidor",
    description: " Es un modelo de diseño de software en el que las tareas se reparten entre los proveedores\
                   de recursos o servicios, llamados servidores, y los demandantes, llamados clientes."
  },
  {
    title: "Scrum",
    description: "Trabajo sobre esta metodologia agile, ya que contiene\
                  un conjunto de buenas practicas para trabajar coloborativamente."
  },
  ];
  constructor() { }

  ngOnInit() {
  }

}
