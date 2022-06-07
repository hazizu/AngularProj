export class CommandeData{
    libelle:string;
    quantite:number;
    prix:number;
    constructor(libelle:string, quantite:number,prix:number){
        this.libelle = libelle;
        this.quantite = quantite;
        this.prix = prix;
    }
}