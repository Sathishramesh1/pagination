
fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
.then((data)=>data.json())
.then((data)=>{

  var k = '<tbody>'
    for(i = 0;i < data.length; i++){
        k+= '<tr>';
        k+='<td>'+data[i].id+'</td>';
        k+='<td>'+data[i].name+'</td>';
        k+= '<td>' + data[i].email + '</td>';
        k+= '</tr>';
        var my=data[i];
    }
    k+='</tbody>';
    document.getElementById('tableData').innerHTML = k;
 

    
}
)