class OrdemBrinquedo {

    ordem(listaPessoa, brinqFav, especie) {
        if (especie === "jabuti") {
            return brinqFav.every((b) => listaPessoa.includes(b));
        }

        let i = 0;
        for (let lista of listaPessoa) {
            if (lista === brinqFav[i]) {
                i++;
            }
            if (i === brinqFav.length) {
                return true;
            }
        }
        return false;
    }
}

export { OrdemBrinquedo }