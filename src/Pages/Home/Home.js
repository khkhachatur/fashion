import React from 'react';

import styled from 'styled-components';
import ReactPlayer from 'react-player';

import Brand from '../../components/Brand';

const HomePage = () => {

    const Button =styled.button`
        background:none;
        cursor: pointer;
        border:none;
        border-bottom: 1px solid #000000;
        border-radius:20px;
        transition: all 0.3s;
        &:hover {
            transform: scale(1.01);
            opacity: 0.7;
    }
    `

  return (
    <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
      <div style={{
            maxWidth: '1200px',
            height: '100%',
            width: '100%',
            padding:'70px'
      }}>
          <div style={{display:'flex', justifyContent:'center', padding:'40px 0 20px 0'}}>
            <h2 id='aboutUs' style={{fontFamily:'Montserrat', display:'flex', justifyContent:'center', padding:'20px'}}>About us</h2>
          </div>
        <ul style={{
            listStyleType:'none',
            display:'flex',
            flexDirection:'column',
            gap:'20px',
            margin:'0',
            fontFamily:'Montserrat',
            fontSize:'18px',
            fontWeight:"100",
            padding:'0'
        }}>
            <li> 
                <strong>Information about 374 Collective: </strong> 374 Collective is a PR and brand strategy consultancy dedicated to expanding Armenia's visibility on a global scale through the cultivation and promotion of creatives, brands, and businesses within a multitude of industries. Ranging from fashion, art, music, hospitality, tourism, and more with an aim to amplify the modern culture of Armenia through digital marketing, strategic partnerships, and media relations.
            </li>
            <li><strong>Information about POMMIE: </strong> Pommie, the premier destination for high-end Armenian designers is introducing the “Made in Armenia” label to the US market. The first of its kind, the boutique luxury retailer offers an exclusively curated collection of highly coveted pieces by leading and emerging designers from the highlands.</li>
            <li><strong>Information about YBAF: </strong> YBAF (Yerevan Biennial Art Foundation) is dedicated to building a 
                        sustainable creative ecosystem elevating the visibility of Armenian culture. Our projects are aimed at interconnecting the realms of the arts, culture, and education. One of our primary goals is to support local Armenian artists. We place a strong emphasis on implementing formal and informal education that 
                        will modernize Armenia’s art scene. Our work is addressed towards spotlighting the various stages, 
                        aesthetics, and forms of Armenian culture, showing its diversity and 
                        connection to the world. The Foundation has been established to develop and execute initiatives 
                        all year round, among them the Yerevan Biennial. This platform exists for public engagement and operates locally, nationally, and internationally.</li>
        </ul>
        
        <h2 id='artist' style={{fontFamily:'Montserrat', display:'flex', justifyContent:'center', padding:'20px'}}>About the Artist</h2>
        <ul style={{display:'flex', flexDirection:'column', fontFamily:'Montserrat', fontSize:'18px', fontWeight:'100', gap:'20px', listStyleType:'none', padding:'0'}}>
            <li>Adam Adamyan is a contemporary Armenian artist, who became famous for 
                his street art, that can be found in almost every corner of central 
                Yerevan. The images in his drawings are incredibly expressive and 
                memorable.
            </li>
            <li>An Arts College graduate, Adam cannot remember when he started drawing - 
            i   t happened very early on.
            </li>
            <li>Adam is currently an Art Factory resident, as well as an artist of YBAF. 
                He intends to continue his career in art, working in different mediums 
                and planning his first solo-exhibition sometime in the current year.
            </li>
        </ul>

        <h2 id='brands' style={{fontFamily:'Montserrat', display:'flex', justifyContent:'center', padding:'20px'}}>Brands and Collections</h2>
        <ul style={{listStyleType:'none', padding:'0', display:'flex', flexDirection:'column', gap:'50px'}}>
            <li style={{border:'none'}}>
                <Brand
                    brandName={'MeriMan'}
                    brandDesc={'Created by Meri Manukyan in 2016, MeriMan aims to blur the line between boldness and subtlety, comfort and elegance, and masculinity and femininity. The brand stands out with its signature use of batik on fabrics, which gives clothes an artsy yet modern look.'}
                    collectionName={'The Armenian touch'}
                    collectionDesc={'As the name implies, the collection is inspired by Armenian traditional ornaments and motifs. The pieces are accented by vivid displays of Martiros Saryan’s paintings by batik. While Saryan’s paintings are the stars of the collection, minimal layering and asymmetric lines tie the collection together more cohesively.'}

                />
            </li>
            <li style={{border:'none'}}>
                <Brand
                    brandName={'Artoon'}
                    brandDesc={'Artoon is an Armenian word which means awake. Nazeli Malkhasian chose this name for her brand because she aspires to be awake in every aspect of daily life. From the literal perspective, she’s usually awake, creating, and dreaming when everyone else goes to sleep. Symbolically, she also consciously tries to be be awake and observant of the world around her and let it inspire her creative endeavors.'}
                    collectionName={'Aybben'}
                    collectionDesc={'The main inspiration of this six-piece collection is the evolution of Armenian alphabet from petroglyphs to Mesropian Aybuben. Special emphasis is put on letters since their union forms the soil of writing, which is one of the most important means of communication. In Armenian history, the God writing is Tir who was considered the scribe of the supreme God Aramazd.'}

                />
            </li>
            <li style={{border:'none'}}>
                <Brand
                    brandName={'Jocund'}
                    brandDesc={'Jocund presents creative solutions in the form of exceptional silhouettes and visuals. Dreamy and unconventional characters inspire designer Varduhi Torozyan to create new pieces filled with spiritual storylines and messaging. The brand places great emphasis on responsible fashion. Aiming to inspire the development of the often-neglected issue of sustainability in Armenian fashion, Jocund uses recycled and eco-friendly materials whenever possible.'}
                    collectionName={'Busazard'}
                    collectionDesc={"Busazard is an Armenian word that means decorated with flowers. Inspired by the plants and flowers that are believed to be a part of heaven's garden—such as lilies, olives, pomegranates, and grapevines—Jocund has created a collection that symbolizes immortality and eternal life. Floral elements and free-flowing silhouettes tie the collection together to create a dreamy atmosphere inspired by heavenly creatures.The main and domineering material in the collection is wool, which is made and dyed in the Syunik province of Armenia. Threads and handmade textures are sourced from “Goris Handmade” SE and  Wool Way Armenia textile company. All the materials used to create this collection are eco-friendly.        "}
                />
            </li>
            <li style={{border:'none'}}>
                <Brand
                    brandName={'13ARCS'}
                    brandDesc={'13ARCS focuses on making clothing for people who love to experiment with diverse shapes, colors, aesthetics and philosophies. The brand aims to make clients feel like they’re in a daydream when wearing their pieces. One of the main goals of 13ARCS is to make sure everyone feels seen and represented by the brand regardless of their ethnicity, gender identity, and backgrounds. Soft, spiritual, ethereal, and free are the words designer Marc Petrosyan likes to use to describe his brand and aesthetic.'}
                    collectionName={'KATIL'}
                    collectionDesc={'One of the biggest and oldest holidays that is still celebrated in Armenia is called Vardavar. While it has become a Christian holiday that commemorates the transfiguration of Jesus, Vardavar’s traditions date back to pagan times.The festival is associated with Astghik, the goddess of water, beauty, love, and fertility. Inspired by her, the designer chose materials that are ethereal and airy. By mixing sheer and light fabrics with structured corsets, bodysuits and pearls the collection stands out as soft and vulnerable yet strong and powerful.As a collection dedicated to strong Armenian women and goddesses, 13ARCS also touches the vulnerable the topic of sexual assault awareness in Armenia, which can be found in small details throughout the outfits.'}

                />
            </li>
            <li>
                <Brand
                    brandName={'ádmery ; ADMiration for MystERY'}
                    brandDesc={"ádmery is a brand based on admiration for mystery. From architecture and history to nature and mythology, everything that has a sense of mystery is a source of inspiration and admiration for designer Alla Dawson.Our mission is to prove that fashion isn't just a piece of textile to cover your skin, it's your vision of the world. ádmery will show you how fashion can tell different stories created by humans and time by taking you to a land of mystery."}
                    collectionName={'Architectural mystery '}
                    collectionDesc={'With this collection, ádmery explores the secrets and legends of Armenian architecture. The temple of Garni, the monasteries of Hayravank and Kecharis, and the windows of the Armenian house Glkhatun serve as main sources of inspiration for the pieces.The color palette of the collection is influenced by the connection between nature and architecture. '}

                />
            </li>
        </ul>
        <h2 id='PNV' style={{fontFamily:'Montserrat', display:'flex', justifyContent:'center', padding:'20px'}}>Photo & Video</h2>
        <div style={{display:'flex', flexDirection:'column', padding:'40px 0'}}>
            <ul style={{padding:'0', listStyleType:'none'}}>
                <li style={{display:'flex', justifyContent:"center"}}>
                    <ReactPlayer
                        url="https://youtu.be/02a0xzW_Doo"
                        />
                </li>
                <li><h2 style={{fontFamily:'Montserrat', fontWeight:'300', display:'flex',justifyContent:'center'}}>POMMIE Launch Campaign</h2></li>
            </ul>
            <ul style={{padding:'0', listStyleType:'none'}}>
                <li style={{display:'flex', justifyContent:"center"}}>
                    <ReactPlayer
                        url="https://youtu.be/rWAR2Aw3ggI"
                        />
                </li>
                <li><h2 style={{fontFamily:'Montserrat', fontWeight:'300', display:'flex',justifyContent:'center'}}>POMMIE Launch Campaign</h2></li>
            </ul>
            
        </div>

       
      </div>
    </div>
  );
};

export default HomePage;

