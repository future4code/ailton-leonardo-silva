// Funções de Navegação

export const goToLogin = (navigate) => {
    navigate("/")
}

export const goToRegister = (navigate) => {
    navigate("/register")
}

export const goToFeed = (navigate) => {
    navigate("/feed")
}

export const goToPost = (navigate, id) => {
    navigate(`/feed/posts/${id}/comments`)
}

export const goToFeedFromPost = (navigate) => {
    navigate("/feed")
}




