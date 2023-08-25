import { type UserPortfolio, TypeSkill } from '../interfaces/userPortfolio';

export const initialUserData:UserPortfolio = {
  id: 1,
  name: "Juan",
  surname: "Sarmiento",
  age: 27,
  city: "Tandil, Buenos Aires, Argentina",
  email: "juansarmientog96@gmail.com",
  title: "Desarrollador FullStack Java & Vue",
  profile: "Con sólida base en desarrollo java, puedo aportar ideas, soluciones modulares, eficientes y fáciles de mantener, y junto a Vue, interfaces interactivas y dinámicas que aseguren una experiencia de usuario fluida y agradable.\nDisfruto de colaborar en entorno de equipo, donde pueda intercambiar ideas y trabajar en conjunto.\nTambién disfruta de desarrollar tanto en áreas de Backend como de Frontend.\nMi objetivo personal es continuar creciendo como profesional, manteniéndome al tanto de las tendencias, tecnologías y metodologías de desarrollo, y buscar oportunidades que me desafíen a ampliar mis habilidades.",
  imageURL: "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1687475573/1681270328482_brilho.jpg",
  skills: [
    {
      id: 23,
      title: "Java",
      typeSkill: TypeSkill.Hard
    },
    {
      id: 29,
      title: "PostgreSQL",
      typeSkill: TypeSkill.Hard
    },
    {
      id: 18,
      title: "Javascript",
      typeSkill: TypeSkill.Hard
    },
    {
      id: 11,
      title: "Empatía",
      typeSkill: TypeSkill.Soft
    },
    {
      id: 12,
      title: "Pensamiento crítico",
      typeSkill: TypeSkill.Soft
    },
    {
      id: 15,
      title: "HTML",
      typeSkill: TypeSkill.Hard
    },
    {
      id: 7,
      title: "Comunicación",
      typeSkill: TypeSkill.Soft
    },
    {
      id: 14,
      title: "Trabajo en equipo",
      typeSkill: TypeSkill.Soft
    },
    {
      id: 16,
      title: "CSS",
      typeSkill: TypeSkill.Hard
    },
    {
      id: 31,
      title: "POSTMAN",
      typeSkill: TypeSkill.Hard
    },
    {
      id: 28,
      title: "Mockito",
      typeSkill: TypeSkill.Hard
    },
    {
      id: 3,
      title: "Adaptabilidad",
      typeSkill: TypeSkill.Soft
    },
    {
      id: 24,
      title: "Spring Boot",
      typeSkill: TypeSkill.Hard
    },
    {
      id: 20,
      title: "React",
      typeSkill: TypeSkill.Hard
    },
    {
      id: 22,
      title: "Jest",
      typeSkill: TypeSkill.Hard
    },
    {
      id: 10,
      title: "Disciplina",
      typeSkill: TypeSkill.Soft
    },
    {
      id: 30,
      title: "GIT & GITHUB",
      typeSkill: TypeSkill.Hard
    },
    {
      id: 26,
      title: "Spring Security",
      typeSkill: TypeSkill.Hard
    },
    {
      id: 17,
      title: "Bootstrap 5",
      typeSkill: TypeSkill.Hard
    },
    {
      id: 4,
      title: "Atención al detalle",
      typeSkill: TypeSkill.Soft
    },
    {
      id: 27,
      title: "Junit",
      typeSkill: TypeSkill.Hard
    },
    {
      id: 6,
      title: "Colaboración",
      typeSkill: TypeSkill.Soft
    },
    {
      id: 21,
      title: "Vue 3",
      typeSkill: TypeSkill.Hard
    },
    {
      id: 9,
      title: "Determinación",
      typeSkill: TypeSkill.Soft
    },
    {
      id: 19,
      title: "Typescript",
      typeSkill: TypeSkill.Hard
    },
    {
      id: 13,
      title: "Resolución de conflictos",
      typeSkill: TypeSkill.Soft
    },
    {
      id: 25,
      title: "Spring Data",
      typeSkill: TypeSkill.Hard
    },
    {
      id: 8,
      title: "Curiosidad",
      typeSkill: TypeSkill.Soft
    }
  ],
  formations: [
    {
      id: 14,
      title: "Vue.js - Intermedio: Lleva tus bases al siguiente nivel",
      educationEntity: "Udemy",
      inProgress: false,
      startDate: "15/05/2023",
      endDate: "16/06/2023",
      certificateURL: "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689083843/certificado-vue-intermedio_d1qebb.jpg"
    },
    {
      id: 15,
      title: "TypeScript: Tu completa guía y manual de mano",
      educationEntity: "Udemy",
      inProgress: false,
      startDate: "05/05/2023",
      endDate: "11/05/2023",
      certificateURL: "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689083843/certificado-ts_rzekqx.jpg"
    },
    {
      id: 12,
      title: "Desarrollador Web Full Stack Java & Vue",
      educationEntity: "Mindhub",
      inProgress: false,
      startDate: "10/09/2022",
      endDate: "13/02/2022",
      certificateURL: "https://res.cloudinary.com/dhcurgqlc/image/upload/v1683863309/insignia_JAVA_cxpb1z.png"
    },
    {
      id: 11,
      title: "Vue.js: De cero a experto",
      educationEntity: "Udemy",
      inProgress: false,
      startDate: "01/05/2023",
      endDate: "25/05/2023",
      certificateURL: "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689083843/certificado-vue_b690kq.jpg"
    },
    {
      id: 16,
      title: "Programación Full Stack Java & React",
      educationEntity: "Egg Coperation",
      inProgress: false,
      startDate: "01/05/2022",
      endDate: "12/03/2023",
      certificateURL: "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689032735/Certificado_Curso_Programacin_FullStack_deywn3_kkp2qu.png"
    },
    {
      id: 13,
      title: "Principios SOLID y Clean Code",
      educationEntity: "Udemy",
      inProgress: false,
      startDate: "01/03/2023",
      endDate: "24/03/2023",
      certificateURL: "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689083843/certificado-solid_rcgfe5.jpg"
    }
  ],
  projects: [
    {
      id: 4,
      title: "The Camp",
      description: "Consta de un E-commerce orientado a la venta de cervezas artesanales; desarrollamos el backend que consta de una API REST basada en Java con Spring Boot y otros proyectos del ecosistema Spring, como Spring JPA y Spring Security. Respecto al front, fue desarrollado utilizando  HTML, CSS, Bootstrap 5, Axios y VueJS.",
      imageURL: "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689175931/image_2023-07-12_123208925_xhfobh.png",
      repositoryURL: "https://github.com/JuansARG/TheCamp-App",
      deployURL: "https://www.youtube.com/watch?v=nt7T_Q6Jn1Y&t=183s"
    },
    {
      id: 2,
      title: "Amazing Events Javascript Vanilla",
      description: "Este proyecto fue desarrollado de manera individual en el marco del bootcamp de Mindhub, Desarrollador Web Full Stack Java. Fue desarrollado con HTML, CSS, Bootstrap y Javascript Vanilla, se trata de una web con varias páginas donde se pueden visualizar gran cantidad de eventos, filtrar por categorias y buscar a travez del input, asi mismo posee un apartado de estadísticas donde desarrollamos bastante lógica para mostrar dichos valores; cabe destacar que es completamente responsiva.",
      imageURL: "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689175176/amazing-events-vanilla_t5hxda.jpg",
      repositoryURL: "https://github.com/JuansARG/AmazingEvents-Html-Css-JS-Vanilla",
      deployURL: "https://juan-sarmiento-amazing-events-v1.netlify.app/index.html"
    },
    {
      id: 3,
      title: "Old Owl Bank",
      description: "OldOwlBank fue el proyecto resultante de todo de lo aprendido durante el bootcamp de MindHub, Desarrollador Web Full Stack JAVA. Aquí se ha desarrollado una API REST en Java utilizando Spring Framework y proyectos de terceros como Spring Boot, Spring JPA, Spring Security. Dicha API fue es consumida por el front el cual fue desarrollado con Html, Css, Bootstrap y VueJS, utilizando este último framework de manera progresiva.",
      imageURL: "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689175176/old-owl-homebanking_rqb7mb.jpg",
      repositoryURL: "https://github.com/JuansARG/OldOwlBank-App",
      deployURL: "https://homebanking-old-owl.onrender.com/web/login.html"
    },
    {
      id: 6,
      title: "Four Legs",
      description: "Este proyecto frontend fue desarrollado de manera grupal en el marco del bootcamp de Mindhub, Desarrollador Web Full Stack Java. Fue desarrollado con HTML, CSS, Bootstrap 5 y VueJS; se trata de un Ecommerce basado en una pet shop. Durante este proyecto y con el fin de darle dinamica al carrito de compras trabajamos con el localStorage.",
      imageURL: "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689175176/pet-shop_umth1d.jpg",
      repositoryURL: "https://github.com/JuansARG/FourLegs-Html-Css-VueJs",
      deployURL: "https://juan-sarmiento-pet-shop-four-legs.netlify.app/index.html"
    },
    {
      id: 1,
      title: "Maps App",
      description: "Este proyecto fue realizado con mucho trabajo y paciencia en el marco de uno de los cursos de Vue de Fernando Herrera, fue desarrollado utilizando Vue 3 Composition API con Typescript, Vuex y MapBox.",
      imageURL: "https://res.cloudinary.com/dlhdrfzlt/image/upload/v1689176612/image_2023-07-12_124328248_boofrd.png",
      repositoryURL: "https://github.com/JuansARG/maps-apps-CursoVue",
      deployURL: "https://juan-sarmiento-maps-app.netlify.app/#/"
    }
  ]
}