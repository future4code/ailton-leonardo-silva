// a) Copie o código acima para um arquivo .ts depois:

// - crie um *type* para representar um post;
// - Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts.

type postagem = {
    autor: string,
    texto: string
}

const posts:postagem[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]
  console.table(posts)

//b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:

  function buscarPostsPorAutor(posts:postagem[], autorInformado:any) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

  console.table(buscarPostsPorAutor(posts, "Dobby"))