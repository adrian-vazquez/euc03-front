

export class Tablas
{

    public static mostrarTablas(  posision: number  ): Array<Boolean>
    {
        if(posision != null)
        {
             if(posision == 0)
                 return [ true, false, false, false];
             if(posision == 1)
                 return [ false, true, false, false];
             if(posision == 2)
                 return [ false, false, true, false];
             if(posision == 3)
                return [ false, false, false, true];
        }
        return [ true, false, false, false];
    }
}