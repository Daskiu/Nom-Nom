export default async function traer_menu() {
    try {

      const dataMenu = {
        home: "/Images/Home.png",
        search: "/Images/Search.png",
        add: "/Images/Save.png",
        profile: "/Images/profile.png",
      };
  
      return dataMenu;
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener los datos del menú");
    }
  }
  
  