//Exercício 0
describe("Exercício 0 - Checagem de Pares ou Ímpares", () => {
  //Exercício 0
  test("A entrada 10 deve retornar true", () => {
    const input = 10;
    const result = checkIfEven(input);
    expect(result).toBe(true);
  });
  test("A entrada 5 deve retornar false", () => {
    const input = 5;
    const result = checkIfEven(input);
    expect(result).toBe(false);
  });
});

//Função auxiliar Ex 0
export const checkIfEven = (n: number): boolean => {
  if (n % 2 === 0) {
    return true;
  }
  return false;
};

//Exercício 1
describe("Exercício 1 - Checagem de string", () => {
  //Exercício 1
  test("Fazendo teste com 'bananinha'", () => {
    const input = "bananinha";
    const result = checkString(input);
    expect(result).toEqual("BANANINHA");
  });
});

//Função auxiliar Ex 1
export const checkString = (text: string) => {
  return text.toUpperCase();
};

//Exercício 2
describe("Exercício 2 - Split - string", () => {
  //Exercício 3
  test("Fazendo teste com 'Leonardo'", () => {
    const input = "Leonardo";
    const result = checkSplit(input);
    expect(result).toEqual(["L", "e", "o", "n", "a", "r", "d", "o"]);
  });
});

//Função auxiliar Ex 2
export const checkSplit = (text: string) => {
  return text.split("");
};

//Exercício 3
describe("Exercício 3 - String to Number", () => {
  //Exercício 3
  test("Fazendo teste com a string '100'", () => {
    const input: string = "100";
    const result = checkTypeNumber(input);
    expect(result).toBe(100);
  });
});

//Função auxiliar Ex 3
export const checkTypeNumber = (value: string) => {
  return Number(value);
};

//Exercício 4
describe("Exercício 4 - String to Number and Length", () => {
  //Exercício 4
  test("Fazendo teste com a string '100'", () => {
    const input: string = "100";
    const result = checkTypeNumberLength(input);
    expect(result).toBe(3);
  });
});

//Função auxiliar Ex 4
export const checkTypeNumberLength = (value: string) => {
  const result = value.length;
  return Number(result);
};

//Exercício 5
describe("Exercício 5 - String to Number and Length", () => {
  //Exercício 5
  test("Fazendo teste com um número random de 1-10", () => {
    const result = checkRandomNumber();
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(10)

  });
});

//Função auxiliar Ex 5
export const checkRandomNumber = () => {
  const result = Math.floor(Math.random() * 10 + 1);
  return Number(result);
};

//Exercício 6
describe("Procurando o Astrodev", () => {
    //Exercício 6
    test("O nome 'Astrodev' deve existir na lista", () => {
    expect(people).toContainEqual({"id": "3","name":"Astrodev"})
    })
})
  
  //Função auxiliar Ex 6
  export interface IUser {
    id: string,
    name: string
   }
   
  export const people: IUser[] = [
    {
    id: "1",
    name: "Leo"
    },
    {
    id: "2",
    name: "Tobias"
    },
    {
    id: "3",
    name: "Astrodev"
    },
    {
    id: "4",
    name: "Laura"
    },
   ]
   
//Exercício 7
describe("[10, 4, 7, 6] deve gerar como saída 7 ", () => {
    //Exercício 7
    test("Cálculo da média", () => {
    expect(average).toBe(7)
    })
})
    const arrayofNumbers: Array<number> = [10, 4, 7, 6]
    const initialValue = 0;
    const lengthofArray:number = Number(arrayofNumbers.length)
    const sumWithInitial = arrayofNumbers.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
    const average = Math.ceil(sumWithInitial / lengthofArray)

//Exercício 8
describe("Função Date of Birth", () => {
    //Exercício 8
    test("Retorna a idade", () => {
    expect(calcAge(2000)).toBe(22)
    })
})

const calcAge = (year: number): number => {
    const currentYear = new Date().getFullYear()
    const age = currentYear - year
    
    return age
}

//Exercício 9
describe("Formatação de Data", () => {
    //Exercício 9
    test("Retorna a data formatada para BR", () => {
    expect(formatDate("2022/09/26")).toBe("26/09/2022")
    })
})

const formatDate = (initialDate: string): string => {
    const date = new Date(initialDate)
		const formattedDate = date.toLocaleDateString()

    return formattedDate 
}



        
    



   
   


