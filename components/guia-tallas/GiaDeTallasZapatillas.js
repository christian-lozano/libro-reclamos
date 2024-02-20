import { Card, Typography } from "@material-tailwind/react";


 
 
export default function GiaDeTallasZapatillas({dataTallasZapatillas}) {
  return (
    <Card className="h-[100vh] w-full overflow-y-scroll p-8" >

      <div className="text-3xl text-black font-extrabold text-center uppercase mb-5">{dataTallasZapatillas.title}</div>
      <table className="w-full min-w-max table-auto text-left h-full">
        <thead>
          <tr className="sticky top-0 mb-10">
            {dataTallasZapatillas.TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-black p-4">
                <Typography
         
            
                  className="font-extrabold text-white uppercase  leading-none opacity-70 text-center"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody >
          {dataTallasZapatillas.TABLE_ROWS.map(({TITLE,ADIDAS, REEBOK,NIKE, CAT,FILA}, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
            <td className="">
                <Typography variant="small" color="blue-gray" className="font-normal hover:bg-blue-gray-100 px-5 py-5 h-full text-center">
                  {TITLE}
                </Typography>
              </td>
              <td className="">

                <Typography variant="small" color="blue-gray" className="font-normal hover:bg-blue-gray-100 px-5 py-5 h-full text-center">
                  {ADIDAS}
                </Typography>
              </td>
              <td className="">

                <Typography variant="small" color="blue-gray" className="font-normal hover:bg-blue-gray-100 px-5 py-5 h-full text-center">
                {REEBOK}

                </Typography>
              </td>
              <td className="">

                <Typography variant="small" color="blue-gray" className="font-normal hover:bg-blue-gray-100 px-5 py-5 h-full text-center">
                {NIKE}

                </Typography>
              </td>
              <td className="">

                <Typography variant="small" color="blue-gray" className="font-normal hover:bg-blue-gray-100 px-5 py-5 h-full text-center">
                {CAT}

                </Typography>
              </td>
              {
                FILA && (
              <td className="">

                <Typography variant="small" color="blue-gray" className="font-normal hover:bg-blue-gray-100 px-5 py-5 h-full text-center">
                {FILA}

                </Typography>
              </td>

                )
              }
          
     
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}