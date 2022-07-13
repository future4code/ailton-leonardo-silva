    // Funções de Navegação
    export const goToHomePage = (navigate) => {
        navigate("/")
    }
  
    export const goToAdminHomePage = (navigate) => {
        navigate("/admin/trips/list")
    }

    export const goToAdminHPage = (navigate) => {
        navigate(-1)
    }
    
    export const goToListTripsPage = (navigate) => {
        navigate(-1)
    }
    
    export const goToListTripsPageHome = (navigate) => {
        navigate("/trips/list")
    }

    export const goToAdmin = (navigate) => {
        navigate("/login")
    }

    export const goToApplicationFormPage = (navigate) => {
        navigate("/trips/application")
    }

    export const goToLogin = (navigate) => {
        navigate("login")
    }

    export const goToAdminHomePageAdmin = (navigate) => {
        navigate(-1)
    }

    export const goToCreateTripPage = (navigate) => {
        navigate("/admin/trips/create")
    }

    export const goToTripDetailsPage = (navigate, id) => {
        navigate(`/admin/trips/${id}`)
    }