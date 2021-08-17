

export interface ILabelGrafica
{
    AutDistritales: string;
    AutDivicionales: string;
    ExcepcionGerencia: string;
    PortabilidadEspNomina: string;
    Reten2021: string;
    RetenSaldoBase: string;
}

export class LabelGrafica
{
    nombreGrafica: ILabelGrafica = 
    {
        AutDistritales: 'AUT.DISTRITALES',
        AutDivicionales: 'AUT. DIVISIONALES',
        ExcepcionGerencia: 'EXCEPCION GERENCIA',
        PortabilidadEspNomina: 'PORTABLIDAD ESP. NOMINA',
        Reten2021: 'RETEN 2021',
        RetenSaldoBase: 'RETEN SALDO BASE'
    }
}