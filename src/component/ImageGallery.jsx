import { useEffect, useState } from "react";

function ImageGallery() {

    
    let [totalImages,updateTotals]=useState([]);
    let [showModel,toggleModelShow]=useState(false);
    let [modelSource,updateModelSource]=useState('');    

    let temp=[];

    useEffect(()=>
    {
        for(let i=1;i<=9;i++)
        {
            temp.push(i);
        }

        updateTotals([...temp])

    },[])
    
    function getSource(source)
    {
        toggleModelShow(true);
        updateModelSource(source);
    }

    function loadMore()
    {
        for(let i=totalImages.length+1;i<=totalImages.length+9;i++)
        {
            temp.push(i);
        }
        
        updateTotals([...totalImages,...temp])
        
    }


    return (  
        <>
                <h1 style={{textAlign:'center'}} >IMAGE GALLERY</h1>

                <div className={ showModel ? 'showmodel' : 'hidemodel' }>
                        <img src={ modelSource }/>
                        <button className="close" onClick={()=>toggleModelShow(false)} >CLOSE</button>
                </div>

                <div className="image_gallery">
                    {
                        totalImages.map(item=>(

                            <img loading='lazy' key={item} onClick={(e)=>getSource(e.target.src)} src={`https://picsum.photos/1080/720?random=${item}.jpg`  }/>
                        ))
                    }
                </div>

                <button onClick={loadMore} className="loadmore">LOAD MORE</button>

        </>
    );
}

export default ImageGallery;