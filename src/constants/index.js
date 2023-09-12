export const artQuotes = [
  {quote:'A beautiful body perishes, but a work of art dies not.',name:'Leonardo da Vinci'},
  {quote:'The aim of art is not is not to represent the outward appearance of things, but their inward significance',name:'Aristotle'},
  {quote:'Art is the queen of all sciences communicating knowledge to all the generations of the world.',name:'Leonardo da Vinci'},
  {quote:'Life beats down and crushes the soul and art reminds you that you have one.',name:'Stella Adler'},
  {quote:'Art washes away from the soul the dust of everyday life.',name:'Pablo Picasso'},
  {quote:'You use a glass mirror to see your face; You use works of art to see your soul.',name:'George Bernard Shaw'},
]

export const frames = (nodes,textureMaterial) => [
    {
      'name':"frame1",
      'geometry':nodes.frame1.geometry,
      'material':textureMaterial,
      'position':[-12.008, 2.59, 9.252],
      'rotation':[-Math.PI / 2, 0, 0],
      'userData':{
        'frame':"frame1",
        'name': 'Graffiti Children',
        'Artist': 'Leonardo da Vinci',
        'description':`This captivating artwork titled "Graffiti Children" features a vivid portrayal of two carefree children riding bicycles. The scene is brought to life with vibrant colors and intricate details. As they pedal along, leaves scatter on the ground, adding a touch of nature's beauty to the urban setting. This painting captures the essence of youthful innocence and the joy of exploration. A true masterpiece that invites viewers to relive the nostalgia of childhood adventures.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-406px -2px',
        }
      }
    },
    {
      'name':"circleFrame",
      'geometry':nodes.circleFrame.geometry,
      'material':textureMaterial,
      'position':[20.121, 3.227, -11.606],
      'rotation':[Math.PI / 2, 0, 0],
      'userData':{
        'frame':"circleFrame",
        'name': 'Adorned Majesty',
        'Artist': 'Pablo Picasso',
        'description':`"Adorned Majesty" captures the regal head and impressive tusks of an elephant, adorned with a vibrant array of colorful artificial feathers. This image embodies the deep connection between humanity and these majestic creatures and celebrates their enduring symbolism of strength and wisdom.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-2px -2px',
        }
      }
    },
    {
      'name':"frame2",
      'geometry':nodes.frame2.geometry,
      'material':textureMaterial,
      'position':[-35.714, 2.691, 20.455],
      'rotation':[0, 1.571, 0],
      'userData':{
        'frame':"frame2",
        'name': 'Timeless',
        'Artist': 'Ben W Nobe',
        'description': `"Timeless" captivates with its fusion of artistic elements. Within the contours of musical artist Davido's head shape, an ancient countdown timer emerges, surrounded by majestic elephants. Graceful birds dance above, framed by towering trees. This artwork invites contemplation of the enduring links between past, present, and future, paying homage to Davido and the passage of time.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-2px -1214px',
        }
      }
    },
    {
      'name':"frame3",
      'geometry':nodes.frame3.geometry,
      'material':textureMaterial,
      'position':[-31.547, 2.691, 20.455],
      'rotation':[0, 1.571, 0],
      'userData':{
        'frame':"frame3",
        'name': 'Focused Lady',
        'Artist': 'Leonardo da Vinci',
        'description':`"Focused Lady" is an exquisite portrayal of a young African woman, celebrated through vibrant colors and striking details. Her head and neck are rendered with remarkable precision, capturing her determined expression. Prominent shades of yellow, blue, and red infuse the artwork with energy and vitality, while the surrounding painting corners add depth and character. This piece is a testament to the strength and determination of African women, symbolizing resilience and unwavering focus.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-1214px -1214px',
        }
      }
    },
    {
      'name':"frame4",
      'geometry':nodes.frame4.geometry,
      'material':textureMaterial,
      'position':[-27.345, 2.691, 20.455],
      'rotation':[0, 1.571, 0],
      'userData':{
        'frame':"frame4",
        'name': 'Harvesting Blessings',
        'Artist': 'Leonardo da Vinci',
        'description':`"Harvesting Blessings" is a captivating artwork that beautifully depicts a black woman's profound connection with nature and her spiritual reverence. In this evocative piece, she is portrayed holding and raising a calabash towards the sky, offering its contents to the gods in a heartfelt gesture of gratitude. Beside her lies a larger calabash on the ground, overflowing with a milky-white fluid, symbolizing the abundance of blessings bestowed upon her.
        The fresh palm wine within both calabashes represents the sacred elixir of life, connecting her to the divine and signifying the richness of her cultural heritage. "Harvesting Blessings" is a celebration of spirituality, nature's abundance, and the deep-rooted traditions that connect us to our roots.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-1618px -2px',
        }
      }
    },
    {
      'name':"frame5",
      'geometry':nodes.frame5.geometry,
      'material':textureMaterial,
      'position':[-23.281, 2.691, 20.455],
      'rotation':[0, 1.571, 0],
      'userData':{
        'frame':"frame5",
        'name': 'Ethereal Expression',
        'Artist': 'Leonardo da Vinci',
        'description':`"Ethereal Expression" captivates with a serene male face adorned in layers of red, white, and blue oil paint. His subtle smile hints at a world of emotions, inviting you to explore the depths of human feeling through this vibrant and textured artwork.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-1618px -406px',
        }
      }
    },
    {
      'name':"frame6",
      'geometry':nodes.frame6.geometry,
      'material':textureMaterial,
      'position':[-18.972, 2.691, 20.455],
      'rotation':[0, 1.571, 0],
      'userData':{
        'frame':"frame6",
        'name': 'Horizon Serenity',
        'Artist': 'Trinity Lipenzzo',
        'description':`"Horizon Serenity" is a breathtaking masterpiece that harmoniously merges the sky and water. The artwork showcases a tranquil scene with a beautiful sky mirrored perfectly in the calm waters below. A gently floating boat adds a touch of serenity, while in the distance, a distant tower rises mysteriously from the water's depths. The artist's skilled use of color creates a mesmerizing play of light and shade, making this artwork a captivating visual experience.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-1618px -810px',
        }
      }
    },
    {
      'name':"frame7",
      'geometry':nodes.frame7.geometry,
      'material':textureMaterial,
      'position':[-14.469, 2.812, 20.455],
      'rotation':[0, 1.571, 0],
      'userData':{
        'frame':"frame7",
        'name': 'Silhouette Serenade',
        'Artist': 'Leonardo da Vinci',
        'description':` "Silhouette Serenade" is a stunning portrayal of a black silhouetted lady standing gracefully on a rustic wooden bridge. With outstretched arms and a gentle tilt of her head, she exudes an aura of pure contentment, as if she's savoring the soothing embrace of nature's breeze. The centerpiece of this captivating artwork is a radiant sun that bathes the scene in warm, golden hues, casting a mesmerizing glow upon the serene landscape. "Silhouette Serenade" is a testament to the beauty of simplicity and the profound connection between humans and the natural world.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-1618px -1214px',
        }
      }
    },
    {
      'name':"frame8",
      'geometry':nodes.frame8.geometry,
      'material':textureMaterial,
      'position':[-37.966, 2.806, 18.638],
      'rotation':[0,0,0],
      'userData':{
        'frame':"frame8",
        'name': 'Whiskered Whimsy',
        'Artist': 'Leonardo da Vinci',
        'description':`"Whiskered Whimsy" is a vibrant and enchanting AI-generated artwork that celebrates the charming essence of a cat's face. This colorful masterpiece places a spotlight on the feline's distinctive whiskers, which stand out prominently and add a touch of curiosity and playfulness to the composition. The cat's face itself is a captivating kaleidoscope of hues, creating a visually stunning and captivating portrayal. "Whiskered Whimsy" is a delightful fusion of art and technology, showcasing the unique beauty of our feline friends with a contemporary twist.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-2px -1618px',
        }
      }
    },
    {
      'name':"frame9",
      'geometry':nodes.frame9.geometry,
      'material':textureMaterial,
      'position':[-37.966, 3.518, -9.25],
      'rotation':[Math.PI / 2, 0, 0],
      'userData':{
        'frame':"frame9",
        'name': 'Contemplative Solitude',
        'Artist': 'Vanessa Hudges P',
        'description':`"Contemplative Solitude" is a poignant black and white artwork that captures the essence of introspection and quiet reflection. In this evocative composition, a solitary lady is depicted sitting on a bench, her chin resting on her hands as she gazes into the distance. The monochromatic palette emphasizes the depth of her contemplation, creating a sense of timelessness and introspection. The lady's thoughtful pose invites viewers to ponder the mysteries of her inner world, making "Contemplative Solitude" a profound exploration of human emotion and introspection.
        `,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-406px -1618px',
        }
      }
    },
    {
      'name':"frame10",
      'geometry':nodes.frame10.geometry,
      'material':textureMaterial,
      'position':[-37.966, 2.576, -10.866],
      'rotation':[Math.PI / 2, 0, 0],
      'userData':{
        'frame':"frame10",
        'name': 'Bold and Colorful Essence',
        'Artist': 'Michelangelo',
        'description':`"Bold and Colorful Essence" is a striking artwork that celebrates the strength and confidence of a completely bald-headed lady. Her face is adorned with a vibrant palette of diverse colors, each shade representing a facet of her bold and fearless spirit. The intense gaze in her eyes exudes self-assuredness and resilience, embodying the essence of inner strength. This unique composition challenges conventional beauty norms and embraces the idea that true beauty radiates from one's authenticity and self-confidence. "Bold and Colorful Essence" is a powerful visual statement that encourages viewers to embrace their individuality and celebrate the beauty within.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-810px -2px',
        }
      }
    },
    {
      'name':"frame11",
      'geometry':nodes.frame11.geometry,
      'material':textureMaterial,
      'position':[-27.549, 2.691, 9.252],
      'rotation':[-Math.PI / 2, 0, 0],
      'userData':{
        'frame':"frame11",
        'name': 'Triumphant Victory Cry',
        'Artist': "Lucy O'brien",
        'description':`"Triumphant Victory Cry" is a captivating artwork that captures the raw and unfiltered emotions of winning. The central figure, a woman, kneels in jubilation, her arms raised high in celebration, and her mouth wide open in a victorious shout. This moment of pure elation is beautifully portrayed through a vibrant mix of colors that evoke the intensity of the emotions felt. Dressed in sports attire, she conveys the essence of triumph after a hard-fought competition. The artwork serves as a testament to the unbridled joy and fulfillment that comes with achieving one's goals. "Triumphant Victory Cry" invites viewers to share in the exhilaration of this triumphant moment and reminds us of the power of perseverance and dedication.        `,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-1214px -2px',
        }
      }
    },
    {
      'name':"frame12",
      'geometry':nodes.frame12.geometry,
      'material':textureMaterial,
      'position':[-13.168, 2.59, 9.252],
      'rotation':[-Math.PI / 2, 0, -Math.PI],
      'userData':{
        'frame':"frame12",
        'name': 'Fantasy Horizon',
        'Artist': 'Dipenzo Lima-win',
        'description':`"Fantasy Horizon" is a mesmerizing artwork that transports viewers into a world of wonder and imagination. The central figure, a woman with her back to the viewer, gazes out toward a fantastical landscape in the distance. The scene is shrouded in an ethereal mist, creating an air of mystery and enchantment. In the sky, distant birds take flight, adding to the sense of otherworldly beauty. The artwork invites us to join the woman in contemplating the boundless possibilities that lie beyond the horizon. "Fantasy Horizon" captures the essence of dreams, the allure of the unknown, and the sense of adventure that beckons us to explore uncharted realms. It is a visual journey into the realm of fantasy, where the ordinary fades away, and the extraordinary comes to life.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-2px -406px',
        }
      }
    },
    {
      'name':"frame13",
      'geometry':nodes.frame13.geometry,
      'material':textureMaterial,
      'position':[-28.712, 2.691, 9.252],
      'rotation':[-Math.PI / 2, 0, -Math.PI],
      'userData':{
        'frame':"frame13",
        'name': 'Ethereal Watcher',
        'Artist': 'Leonardo da Vinci',
        'description':`"Ethereal Watcher" unveils a world where nature and humanity converge in a dance of enigmatic beauty. Within this tranquil woodland, a majestic tree stands as a silent guardian, its bark forming the visage of a stern and contemplative man. His presence exudes a sense of timeless wisdom, symbolizing the enduring connection between mankind and the natural world. Amidst the solitude of the forest, the guardian tree stands resolute, a testament to the enduring bond between nature and human spirit. This captivating artwork invites viewers to contemplate the mysteries of the forest and the profound connection between the human soul and the wilderness.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-406px -406px',
        }
      }
    },
    {
      'name':"frame14",
      'geometry':nodes.frame14.geometry,
      'material':textureMaterial,
      'position':[-27.549, 2.59, -4.233],
      'rotation':[-Math.PI / 2, 0, 0],
      'userData':{
        'frame':"frame14",
        'name': 'Luminous Reverie',
        'Artist': 'Leonardo da Vinci',
        'description':`"Luminous Reverie" is an enigmatic masterpiece that envelops the viewer in a world of radiant ultraviolet hues. The central focus is a human face, bathed in the surreal glow of vivid, shimmering colors. With closed eyes, the subject appears to be lost in deep contemplation, as if communing with an inner realm of thoughts and emotions. The striking contrast against the dark background accentuates the brilliance of the ultraviolet palette, creating an atmosphere of otherworldly mystique. "Luminous Reverie" invites us to explore the hidden facets of our consciousness, where thoughts and dreams converge in a luminous dance of imagination. This captivating artwork beckons viewers to unlock their inner realms of reflection and wonder, inspiring a sense of introspection and awe.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-810px -406px',
        }
      }
    },
    {
      'name':"frame15",
      'geometry':nodes.frame15.geometry,
      'material':textureMaterial,
      'position':[-28.712, 2.59, -4.233],
      'rotation':[-Math.PI / 2, 0, -Math.PI],
      'userData':{
        'frame':"frame15",
        'name': 'Rose-Scented Dreams',
        'Artist': 'Kelvin Ilodibe',
        'description':`"Rose-Scented Dreams" is a captivating portrait that captures a moment of pure sensory delight. The central figure, a young girl, delicately holds a rose up to her face, covering one of her eyes with the blossom's petals. Her eyes are closed in a serene expression, as if she's savoring the sweet fragrance of the rose through her imagination. This painting invites viewers to join the girl in her sensory journey, celebrating life's simple pleasures and the awakening of the senses. The interplay of light and shadow adds depth and texture to the scene, enhancing the emotional experience. "Rose-Scented Dreams" transports us to a world where beauty surrounds us, even in the smallest of moments, and encourages us to appreciate the poetry in everyday life.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-1214px -406px',
        }
      }
    },
    {
      'name':"frame16",
      'geometry':nodes.frame16.geometry,
      'material':textureMaterial,
      'position':[-12.008, 2.59, -4.248],
      'rotation':[-Math.PI / 2, 0, 0],
      'userData':{
        'frame':"frame16",
        'name': 'Radiant Reverie',
        'Artist': 'Leonardo da Vinci',
        'description':`"Radiant Reverie" portrays a girl with her eyes closed, her body adorned with a radiant blend of gold and yellow hues. Against a serene blue backdrop, she embodies the essence of purity and serenity. This artwork captures a moment of pure bliss, inviting viewers to immerse themselves in the tranquil beauty of the scene.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-2px -810px',
        }
      }
    },
    {
      'name':"frame17",
      'geometry':nodes.frame17.geometry,
      'material':textureMaterial,
      'position':[-13.168, 2.59, -4.248],
      'rotation':[-Math.PI / 2, 0, -Math.PI],
      'userData':{
        'frame':"frame17",
        'name': 'Evolving Epochs',
        'Artist': 'Sandra Vans McDonalds',
        'description':`"Evolving Epochs" offers a captivating journey through the ages, showcasing the stages of evolution that have shaped humanity. From human-like creatures of ancient times to the modern-day individual, this artwork traces the remarkable journey of transformation that has led to the present age. Each figure within the composition represents a distinct era in our evolutionary history, revealing the interconnectedness of all life. "Evolving Epochs" is a visual testament to the continuous cycle of change and adaptation that defines our species' remarkable evolution.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-406px -810px',
        }
      }
    },
    {
      'name':"frame18",
      'geometry':nodes.frame18.geometry,
      'material':textureMaterial,
      'position':[-19.493, 2.608, 2.322],
      'rotation':[-Math.PI / 2, 0, Math.PI / 2],
      'userData':{
        'frame':"frame18",
        'name': 'Mosaic of Expressions',
        'Artist': 'Alfred Ibuzo',
        'description':`"Mosaic of Expressions" is a vibrant and multi-faceted artwork that celebrates the power of words and creativity. Within the composition, a woman's figure is adorned with intricate writings, each stroke a work of art in itself. These words, written in a variety of colors and styles, come together to form a breathtaking mosaic of expressions. The fusion of visual and literary artistry creates a dynamic and emotionally charged piece that invites viewers to explore the intricate details and hidden messages within the artwork. "Mosaic of Expressions" is a testament to the beauty of language, the depth of human emotion, and the boundless possibilities of creative self-expression.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-810px -810px',
        }
      }
    },
    {
      'name':"frame19",
      'geometry':nodes.frame19.geometry,
      'material':textureMaterial,
      'position':[-19.493, 2.608, 3.483],
      'rotation':[-Math.PI / 2, 0, -Math.PI / 2],
      'userData':{
        'frame':"frame19",
        'name': 'Colorful Canine Vision',
        'Artist': 'Lipendo lima-Mel',
        'description':`"Colorful Canine Vision" is a captivating artwork that offers a unique perspective on the world through the eyes of a faithful canine companion. In this vibrant composition, a dog is depicted in intense focus, gazing either at the camera or its devoted painter, capturing a moment of undivided attention. The use of bold and vivid colors creates a sense of excitement and energy, reflecting the enthusiasm and curiosity of our four-legged friends. This artwork invites viewers to see the world from a different vantage point, one filled with wonder and unwavering loyalty. "Colorful Canine Vision" is a playful reminder of the joy and simplicity of life as seen through the eyes of a beloved pet.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-1214px -810px',
        }
      }
    },
    {
      'name':"frame20",
      'geometry':nodes.frame20.geometry,
      'material':textureMaterial,
      'position':[-12.709, 2.581, -14.193],
      'rotation':[-Math.PI / 2, 0, 0],
      'userData':{
        'frame':"frame20",
        'name': 'Mystique in Spectacles',
        'Artist': 'Achebe Alfredo K',
        'description':`"Mystique in Spectacles" is an intriguing artwork that presents a captivating portrayal of a man's face, shrouded in an air of mystery. The subject dons a pair of stylish spectacles, concealing the lower part of his nose and mouth, adding an element of enigma to his visage. The use of rich and intricate details in the painting draws the viewer's attention to the expressive eyes framed by the glasses. The interplay of light and shadow adds depth and complexity to the composition, leaving us to wonder about the thoughts and stories hidden behind those lenses. "Mystique in Spectacles" is an artistic exploration of the intrigue and allure that can be found in the most ordinary of moments, reminding us that mystery often resides in the details we don't see.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-406px -1214px',
        }
      }
    },
    {
      'name':"frame21",
      'geometry':nodes.frame21.geometry,
      'material':textureMaterial,
      'position':[-12.709, 2.581, -19.653],
      'rotation':[-Math.PI / 2, 0, 0],
      'userData':{
        'frame':"frame21",
        'name': 'Enigmatic Beauty',
        'Artist': 'Maureen Okolo',
        'description':`"Enigmatic Beauty" is an exquisite portrayal of a girl's face and neck, radiating an aura of intrigue and allure. Her striking blue eyes captivate the viewer with their captivating beauty. The artwork cleverly combines the natural elegance of the subject with the addition of captivating paintings adorning select areas of her visage. These intricate paintings, delicately woven into her features, evoke a sense of mystery and creativity. "Enigmatic Beauty" challenges conventional notions of beauty by celebrating the unique and unconventional. It invites us to appreciate the allure of individuality and the artistry that resides within every individual. This mesmerizing artwork is a testament to the notion that true beauty is multifaceted and often lies in the unexplored realms of the enigmatic soul.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-810px -1214px',
        }
      }
    },
    {
      'name':"frame22",
      'geometry':nodes.frame22.geometry,
      'material':textureMaterial,
      'position':[-12.709, 2.581, -25.258],
      'rotation':[-Math.PI / 2, 0, 0],
      'userData':{
        'frame':"frame22",
        'name': 'Floral Veil of Diversity',
        'Artist': 'Harry Charles',
        'description':`"Floral Veil of Diversity" is a captivating artwork that beautifully marries elements of nature and individuality. A striking black and white portrait of a lady forms the canvas, her face partially obscured by a lush profusion of vibrant, colorful flowers. Each blossom represents a facet of diversity, a celebration of the unique qualities that make every individual special. The contrast between the grayscale portrayal of the lady and the riot of colors in the flowers is a visual metaphor for the rich tapestry of humanity. This artwork invites us to contemplate the harmony that can be found when we embrace our individuality and celebrate the diversity of the world around us. "Floral Veil of Diversity" reminds us that beauty often thrives in the amalgamation of different colors, just as it does in the tapestry of human existence.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-1px -1px',
        }
      }
    },
    {
      'name':"frame23",
      'geometry':nodes.frame23.geometry,
      'material':textureMaterial,
      'position':[-7.819, 2.812, 20.455],
      'rotation':[0, 1.571, 0],
      'userData':{
        'frame':"frame23",
        'name': 'Eyes of Kaleidoscope',
        'Artist': 'Vincenzo Tuple',
        'description':`"Eyes of Kaleidoscope" is a mesmerizing artwork that places the focus squarely on the captivating beauty of the human eye. This piece skillfully portrays the eye as a vibrant and ever-changing kaleidoscope of colors. Even the inner pupils are adorned with intricate and enchanting hues, creating a sense of depth and wonder. The play of colors within the eye invites viewers to peer into the depths of human emotion and experience. "Eyes of Kaleidoscope" is a celebration of the intricate and often enigmatic nature of the human gaze. It reminds us that within the depths of every individual lies a world of emotions and stories, waiting to be discovered through the window of the eye.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-403px -1px',
        }
      }
    },
    {
      'name':"frame24",
      'geometry':nodes.frame24.geometry,
      'material':textureMaterial,
      'position':[24.238, 4.99, 20.455],
      'rotation':[0, 1.571, 0],
      'userData':{
        'frame':"frame24",
        'name': 'Mystic Gaze',
        'Artist': 'Susan Iwenofu',
        'description':`"Mystic Gaze" is a monumental artwork that commands attention with the piercing gaze of a woman's face. The subject's hands frame her eyes, creating a mesmerizing focal point. Her eyes, both adorned in a captivating shade of rich brown, exude an air of mystique. The canvas comes alive with a riot of colors that dance and swirl around her face, as if reflecting the depth of her thoughts and emotions. "Mystic Gaze" invites viewers to contemplate the enigma of human expression and the hidden stories behind every set of eyes. This awe-inspiring piece captures the essence of curiosity, introspection, and the endless mysteries of the human soul.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-805px -1px',
        }
      }
    },
    {
      'name':"frame25",
      'geometry':nodes.frame25.geometry,
      'material':textureMaterial,
      'position':[19.472, 3.806, 20.494],
      'rotation':[0, 1.571, 0],
      'userData':{
        'frame':"frame25",
        'name': 'Vibrant Euphoria',
        'Artist': 'Leonardo da Vinci',
        'description':`"Vibrant Euphoria" is an electrifying masterpiece that bursts with energy and life. A woman, her face adorned with a kaleidoscope of colors, stands as a living canvas of creativity. Her long, flowing hair sways with the rhythm of her spirit, and her lips part in a gentle, anticipatory sigh. The canvas explodes with a symphony of colors that seem to leap and dance around her, creating an atmosphere of pure euphoria. This artwork is a celebration of the boundless creativity within the human soul, where every brushstroke and hue represents a unique facet of expression. "Vibrant Euphoria" beckons viewers to immerse themselves in the joy of artistic exploration and the vibrant spectrum of human emotion.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-1207px -1px',
        }
      }
    },
    {
      'name':"frame26",
      'geometry':nodes.frame26.geometry,
      'material':textureMaterial,
      'position':[17.527, 3.027, 20.494],
      'rotation':[0, 1.571, 0],
      'userData':{
        'frame':"frame26",
        'name': 'Awakening Vision',
        'Artist': 'Ben Ikechukwu',
        'description':`"Awakening Vision" is a thought-provoking artwork that delves into the depths of inner perception and enlightenment. The central figure, a woman adorned in an intricate costume, presents a captivating enigma. Her forehead is graced with a vividly detailed eye, symbolizing the awakening of inner vision and heightened consciousness. This artwork invites contemplation on the idea that there is more to reality than meets the eye. It speaks to the concept of inner wisdom, intuition, and the expansion of awareness beyond the physical realm. "Awakening Vision" challenges viewers to explore the hidden realms of their own consciousness and embrace the potential for enlightenment and insight that lies within.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-1px -403px',
        }
      }
    },
    {
      'name':"frame27",
      'geometry':nodes.frame27.geometry,
      'material':textureMaterial,
      'position':[15.521, 2.15, 20.494],
      'rotation':[0, 1.571, 0],
      'userData':{
        'frame':"frame27",
        'name': 'Solitude of Sorrow',
        'Artist': 'Gucci Parc-Debues',
        'description':`"Solitude of Sorrow" is a poignant artwork that captures the essence of profound sadness and introspection. The central figure, a woman, is depicted sitting on the floor with her head buried in her knees. Her posture conveys a deep sense of despair and vulnerability. The absence of clothing symbolizes her emotional nakedness, baring her soul to the weight of her sorrows. The use of muted colors and soft brushstrokes adds to the overall sense of melancholy and introspection. "Solitude of Sorrow" invites viewers to reflect on the universal human experience of facing moments of deep sadness and the need for solace and self-compassion during such times.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-403px -403px',
        }
      }
    },
    {
      'name':"frame28",
      'geometry':nodes.frame28.geometry,
      'material':textureMaterial,
      'position':[28.722, 4.662, 18.948],
      'rotation':[Math.PI, 0, Math.PI],
      'userData':{
        'frame':"frame28",
        'name': 'In the Arms of Solace',
        'Artist': 'Gucci Parc-Debues',
        'description':`"In the Arms of Solace" is a touching artwork that resonates with profound sadness and introspection. The central figure, a woman, sits on the floor with her head nestled in her knees, enveloped in a shroud of melancholy. Her vulnerability is laid bare, as she confronts the depths of her emotions. The absence of clothing symbolizes her emotional nakedness and the rawness of her feelings. Amidst the solitude, a lone white bird graces the scene, adding a symbol of hope and resilience. The gentle presence of the bird amidst the sorrowful ambiance reminds us that even in our darkest moments, there can be a glimmer of solace and the potential for healing. "In the Arms of Solace" invites viewers to embrace the complex emotions of sorrow and the possibility of finding comfort and strength within them.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-805px -403px',
        }
      }
    },
    {
      'name':"frame29",
      'geometry':nodes.frame29.geometry,
      'material':textureMaterial,
      'position':[28.722, 2.541, 18.481],
      'rotation':[Math.PI, 0, Math.PI],
      'userData':{
        'frame':"frame29",
        'name': 'Self-Reflection',
        'Artist': 'Gucci Parc-Debues',
        'description':`"Self-Reflection" is a captivating artwork that invites viewers to contemplate the layers of their identity. A lone woman stands before a mosaic wall of eyes, symbolizing the diverse perspectives that shape us. Beside her, a mysterious mask suggests the roles we adopt in life. This piece inspires introspection and the quest to unveil our authentic selves.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-1207px -403px',
        }
      }
    },
    {
      'name':"frame30",
      'geometry':nodes.frame30.geometry,
      'material':textureMaterial,
      'position':[28.722, 7.359, 18.475],
      'rotation':[Math.PI, 0, Math.PI],
      'userData':{
        'frame':"frame30",
        'name': 'Solemn Watcher',
        'description':`"Solemn Watcher" is a captivating artwork that centers on the mesmerizing gaze of a focused owl against a serene bluish background, symbolizing wisdom and keen observation. This composition invites viewers to contemplate the profound beauty of nature and the wisdom that can be gleaned from the silent observation of the world around us.`,
        'Artist': 'Prince Lebron',
        'image':{
          'url':'bg-sprite2',
          'background-position': '-1px -805px',
        }
      }
    },
    {
      'name':"frame31",
      'geometry':nodes.frame31.geometry,
      'material':textureMaterial,
      'position':[2.738, 2.812, -27.651],
      'rotation':[0, -Math.PI / 2, 0],
      'userData':{
        'frame':"frame31",
        'name': 'Moonlit Tranquility',
        'Artist': 'Pablo Picasso',
        'description':`"Moonlit Tranquility" is a serene landscape painting that captures the enchanting beauty of a night bathed in moonlight. The centerpiece of this artwork is a large, luminous moon that graces the night sky, casting a gentle glow over the entire scene. Beneath the celestial orb, a lush expanse of green low grass stretches out, swaying gently in the tranquil night breeze. Further in the distance, a cluster of trees stands as silent sentinels, their forms partially obscured by the soft moonlight.It invites viewers to immerse themselves in the serene ambiance of this nocturnal scene, where the world is bathed in a peaceful and dreamlike glow. It evokes a sense of calm and introspection, encouraging us to appreciate the quiet beauty of the natural world at night.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-403px -805px',
        }
      }
    },
    {
      'name':"frame32",
      'geometry':nodes.frame32.geometry,
      'material':textureMaterial,
      'position':[-7.299, 2.812, -27.651],
      'rotation':[0, -Math.PI / 2, 0],
      'userData':{
        'frame':"frame32",
        'name': 'Masked Elegance',
        'Artist': 'Pablo Picasso',
        'description':`"Masked Elegance" is a captivating artwork that celebrates the graceful beauty of a woman adorned with intricate beadwork. Her visage is a canvas of vibrant colors and artistry, with her eyes framed by delicate beads that cascade from her hair to her neck, exuding an air of regal elegance.In one hand, she holds a finely crafted facial mask, gracefully raised to cover one of her eyes. This mask, a work of art in itself, adds an element of mystery and intrigue to the scene. It symbolizes the layers of identity and the roles we play in society, often concealing parts of our true selves."Masked Elegance" invites viewers to contemplate the intricate dance between authenticity and societal expectations. It celebrates the beauty of self-expression and the artistry that can be found in both the seen and the hidden aspects of our lives.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-805px -805px',
        }
      }
    },
    {
      'name':"frame33",
      'geometry':nodes.frame33.geometry,
      'material':textureMaterial,
      'position':[-37.966, 2.812, -19.36],
      'rotation':[0,0,0],
      'userData':{
        'frame':"frame33",
        'name': 'Whiskered Whimsy',
        'Artist': 'Leonardo da Vinci',
        'description':`"Whiskered Whimsy" is a vibrant and enchanting AI-generated artwork that celebrates the charming essence of a cat's face. This colorful masterpiece places a spotlight on the feline's distinctive whiskers, which stand out prominently and add a touch of curiosity and playfulness to the composition. The cat's face itself is a captivating kaleidoscope of hues, creating a visually stunning and captivating portrayal. "Whiskered Whimsy" is a delightful fusion of art and technology, showcasing the unique beauty of our feline friends with a contemporary twist.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-2px -1618px',
        }
      }
    },
    {
      'name':"frame34",
      'geometry':nodes.frame34.geometry,
      'material':textureMaterial,
      'position':[-13.193, 2.812, -19.36],
      'rotation':[Math.PI, 0, Math.PI],
      'userData':{
        'frame':"frame34",
        'name': 'Pink Reverie',
        'Artist': 'vladmir Kent',
        'description':`"Pink Reverie" is a mesmerizing artwork that bathes the viewer in a sea of soft pink hues. The central figure, a woman with voluminous hair, stands as the focal point of this composition. Her hands delicately cover her eyes, adding an element of mystery and introspection to the scene.The predominant color palette of gentle pinks creates an atmosphere of dreamy serenity, while the white background serves as a canvas for this soothing palette to come to life. "Pink Reverie" invites viewers to immerse themselves in a world of softness and contemplation, where the act of concealing one's gaze hints at the complex emotions that lie beneath the surface. It's an exploration of the beauty and vulnerability found in moments of introspective solitude.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-1207px -805px',
        }
      }
    },
]

export const frames2 = (nodes,textureMaterial) => 
[
    {
      'name':"frame35",
      'geometry':nodes.frame35.geometry,
      'material':textureMaterial,
      'position':[-12.008, 7.388, 9.252],
      'rotation':[-Math.PI / 2, 0, 0],
      'userData':{
        'frame':"frame35",
        'name': 'Harmonic Array',
        'Artist': 'Jerry K Phillips',
        'description':`"Harmonic Array" is a striking painting that features five guitars meticulously arranged with one at the center, creating a visually harmonious composition. This artwork pays homage to the soul-stirring power of music and the beauty of its instruments, inviting viewers to appreciate the artistry in both sound and form.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-1px -1207px',
        }
      }
    },
    {
      'name':"frame36",
      'geometry':nodes.frame36.geometry,
      'material':textureMaterial,
      'position':[-13.168, 7.388, 9.252],
      'rotation':[-Math.PI / 2, 0, -Math.PI],
      'userData':{
        'frame':"frame36",
        'name': 'Cigar Moments',
        'Artist': 'Peter Rolland',
        'description':`"Cigar Moments" is a detailed pencil drawing that captures a man wearing a cap as he leisurely holds a cigar and prepares to place it in his mouth. This artwork evokes a sense of relaxation and contemplation, celebrating the small moments of life where one can savor the simple pleasures like enjoying a fine cigar.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-403px -1207px',
        }
      }
    },
    {
      'name':"frame37",
      'geometry':nodes.frame37.geometry,
      'material':textureMaterial,
      'position':[-27.549, 7.388, 9.252],
      'rotation':[-Math.PI / 2, 0, 0],
      'userData':{
        'frame':"frame37",
        'name': 'Enigmatic Beauty',
        'Artist': 'Maureen Okolo',
        'description':`"Enigmatic Beauty" is an exquisite portrayal of a girl's face and neck, radiating an aura of intrigue and allure. Her striking blue eyes captivate the viewer with their captivating beauty. The artwork cleverly combines the natural elegance of the subject with the addition of captivating paintings adorning select areas of her visage. These intricate paintings, delicately woven into her features, evoke a sense of mystery and creativity. "Enigmatic Beauty" challenges conventional notions of beauty by celebrating the unique and unconventional. It invites us to appreciate the allure of individuality and the artistry that resides within every individual. This mesmerizing artwork is a testament to the notion that true beauty is multifaceted and often lies in the unexplored realms of the enigmatic soul.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-810px -1214px',
        }
      }
    },
    {
      'name':"frame38",
      'geometry':nodes.frame38.geometry,
      'material':textureMaterial,
      'position':[-28.693, 7.388, 9.151],
      'rotation':[-Math.PI / 2, 0, -Math.PI],
      'userData':{
        'frame':"frame38",
        'name': 'Whiskered Whimsy',
        'Artist': 'Leonardo da Vinci',
        'description':`"Whiskered Whimsy" is a vibrant and enchanting AI-generated artwork that celebrates the charming essence of a cat's face. This colorful masterpiece places a spotlight on the feline's distinctive whiskers, which stand out prominently and add a touch of curiosity and playfulness to the composition. The cat's face itself is a captivating kaleidoscope of hues, creating a visually stunning and captivating portrayal. "Whiskered Whimsy" is a delightful fusion of art and technology, showcasing the unique beauty of our feline friends with a contemporary twist.`,
        'image':{
          'url':'bg-sprite1',
          'background-position': '-2px -1618px',
        }
      }
    },
    {
      'name':"frame39",
      'geometry':nodes.frame39.geometry,
      'material':textureMaterial,
      'position':[-27.549, 7.385, -4.233],
      'rotation':[-Math.PI / 2, 0, 0],
      'userData':{
        'frame':"frame39",
        'name': "Nature's Offering",
        'Artist': 'Juliet Helen Ivy',
        'description':`"Nature's Offering" is a captivating image of a tree formed in the shape of a human hand, rising gracefully from the middle of serene waters. The palm of the hand is adorned with lush, green leaves, symbolizing the giving and nurturing essence of nature. This artwork conveys the profound connection between humanity and the natural world, where nature extends its hand, offering beauty, sustenance, and a reminder of our interdependence with the environment.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-805px -1207px',
        }
      }
    },
    {
      'name':"frame40",
      'geometry':nodes.frame40.geometry,
      'material':textureMaterial,
      'position':[-28.712, 7.385, -4.233],
      'rotation':[-Math.PI / 2, 0, -Math.PI],
      'userData':{
        'frame':"frame40",
        'name': "Nature's Guardian",
        'Artist': 'Leroy Valentine',
        'description':`"Nature's Guardian" portrays the elegant figure of a woman seamlessly intertwined with the form of a tree. Her outstretched limbs transform into graceful branches adorned with vibrant green leaves, evoking a sense of unity with the natural world. This artwork celebrates the harmonious relationship between humanity and nature, reminding us of our responsibility to protect and nurture the environment that sustains us.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-1207px -1207px',
        }
      }
    },
    {
      'name':"frame41",
      'geometry':nodes.frame41.geometry,
      'material':textureMaterial,
      'position':[-12.008, 7.388, -4.248],
      'rotation':[-Math.PI / 2, 0, 0],
      'userData':{
        'frame':"frame41",
        'name': 'Symbiotic Connection',
        'Artist': 'Vera T. Pudence',
        'description':`"Symbiotic Connection" is a beautifully crafted artwork that blurs the boundaries between human and nature. It features a woman with her hands delicately wrapped around her body, seamlessly merging with the sinuous branches of a tree. The intricate blending of human and natural elements symbolizes the profound connection between mankind and the environment. It serves as a reminder of the interdependence of all living things and the importance of nurturing our planet.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-1609px -1px',
        }
      }
    },
    {
      'name':"frame42",
      'geometry':nodes.frame42.geometry,
      'material':textureMaterial,
      'position':[-13.168, 7.388, -4.248],
      'rotation':[-Math.PI / 2, 0, -Math.PI],
      'userData':{
        'frame':"frame42",
        'name': 'Mosaic Majesty',
        'Artist': 'Lawrence Ofili',
        'description':`"Mosaic Majesty" is a captivating artwork that portrays the regal presence of a deer. Crafted in intricate mosaic patterns, this piece mesmerizes with its detailed beauty. The deer's gaze, unwavering and direct, seems to lock with the viewer through the lens of the camera. Its eyes mirror the wisdom and grace of the natural world, inviting viewers to contemplate the profound connection between humanity and the animal kingdom. "Mosaic Majesty" celebrates the magnificence of wildlife and the importance of preserving the delicate balance of our ecosystems.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-1609px -403px',
        }
      }
    },
    {
      'name':"frame43",
      'geometry':nodes.frame43.geometry,
      'material':textureMaterial,
      'position':[-7.819, 7.516, 20.455],
      'rotation':[0, 1.571, 0],
      'userData':{
        'frame':"frame43",
        'name': 'Ethereal Vision',
        'Artist': 'Leonardo da Vinci',
        'description':`"Ethereal Vision" is a minimalist yet striking artwork that celebrates the sheer beauty and wonder of the human eye. In this composition, the artist has masterfully employed a predominantly white canvas, leaving only subtle hints of color, primarily light blue, to delicately shape the eye.The result is a visual marvel that encapsulates the essence of clarity, purity, and the ethereal nature of sight. The limited palette emphasizes the idea that even in the vast expanse of white, the human eye stands as a beacon of perception and understanding. "Ethereal Vision" invites viewers to contemplate the profound role our eyes play in interpreting the world around us and the boundless depths of insight they hold.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-1609px -805px',
        }
      }
    },
    {
      'name':"frame44",
      'geometry':nodes.frame44.geometry,
      'material':textureMaterial,
      'position':[23.334, 7.516, -27.651],
      'rotation':[0, -Math.PI / 2, 0],
      'userData':{
        'frame':"frame44",
        'name': "Eden's Echo",
        'Artist': 'Bennedict J.K',
        'description':`"Eden's Echo" is a thought-provoking artwork that draws inspiration from the biblical narrative of Adam and Eve. In this contemporary interpretation, a man and a woman stand in a lush, Eden-like setting. They are bare-clothed, their bodies adorned with a sense of innocence and natural beauty, with no sensitive areas revealed.Facing each other, their hair transforms into a magnificent tree, symbolizing the connection between humanity and nature. This artwork evokes themes of creation, temptation, and the eternal interplay between humanity and the environment."Eden's Echo" invites viewers to reflect on our intrinsic relationship with the natural world and the timeless narratives that shape our understanding of ourselves and the world around us.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-1609px -1207px',
        }
      }
    },
    {
      'name':"frame45",
      'geometry':nodes.frame45.geometry,
      'material':textureMaterial,
      'position':[-7.819, 7.516, -27.651],
      'rotation':[0, -Math.PI / 2, 0],
      'userData':{
        'frame':"frame45",
        'name': 'Harmony of Diversity',
        'Artist': 'Cleo Emecheta',
        'description':`"Harmony of Diversity" is a vibrant and captivating artwork that portrays three human-like figures seated closely together, each holding a distinct item. The bright colors used in this piece symbolize the diversity of their individual backgrounds, experiences, and perspectives.As they sit in close proximity, their unity and shared humanity are evident. This artwork celebrates the beauty of harmonious coexistence, where differences are embraced, and a sense of togetherness prevails."Harmony of Diversity" serves as a reminder of the richness that emerges when people from different walks of life come together, highlighting the potential for collaboration, understanding, and unity in our diverse world.`,
        'image':{
          'url':'bg-sprite2',
          'background-position': '-1px -1609px',
        }
      }
    },
]

export const pivots = (nodes,textureMaterial) => [
  {
  'name':"pivot1",
  'geometry':nodes.pivot1.geometry,
  'material':textureMaterial,
  'position':[-26.946, 0.667, 16.181],
},
{
  'name':"pivot2",
  'geometry':nodes.pivot2.geometry,
  'material':textureMaterial,
  'position':[-16.946, 0.667, 16.181],
},
{
  'name':"pivot3",
  'geometry':nodes.pivot3.geometry,
  'material':textureMaterial,
  'position':[-16.946, 0.667, -15.819]
},
{
  'name':"pivot4",
  'geometry':nodes.pivot4.geometry,
  'material':textureMaterial,
  'position':[-25.461, 0.667, -19.882]
},
{
  'name':"pivot5",
  'geometry':nodes.pivot5.geometry,
  'material':textureMaterial,
  'position':[-1.946, 0.667, 16.181],
},
{
  'name':"pivot6",
  'geometry':nodes.pivot6.geometry,
  'material':textureMaterial,
  'position':[-1.946, 0.667, -15.819],
},
{
  'name':"pivot7",
  'geometry':nodes.pivot7.geometry,
  'material':textureMaterial,
  'position':[28.434, 1.367, -16.356],
},
{
  'name':"pivot8",
  'geometry':nodes.pivot8.geometry,
 ' material':textureMaterial,
  'position':[24.515, 1.367, -19.029],
},
{
  'name':"pivot9",
  'geometry':nodes.pivot9.geometry,
  'material':textureMaterial,
  'position':[24.515, 1.367, -20.101],
},
{
  'name':"pivot10",
  'geometry':nodes.pivot10.geometry,
  'material':textureMaterial,
  'position':[24.515, 1.367, -21.032],
},
]

// export const newframe = (nodes,textureMaterial) => [
//    {
//     'mesh': 
//     <mesh
//       name="frame1"
//       geometry={nodes.frame1.geometry}
//       material={textureMaterial}
//       position={[-12.008, 2.59, 9.252]}
//       rotation={[-Math.PI / 2, 0, 0]}
//   />
//   },
//   {
//     'mesh': 
//     <mesh
//       name="circleFrame"
//       geometry={nodes.circleFrame.geometry}
//       material={textureMaterial}
//       position={[20.121, 3.227, -11.606]}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame2"
//       geometry={nodes.frame2.geometry}
//       material={textureMaterial}
//       position={[-35.714, 2.691, 20.455]}
//       rotation={[0, 1.571, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       geometry={nodes.frame3.geometry}
//       name="frame3"
//       material={textureMaterial}
//       position={[-31.547, 2.691, 20.455]}
//       rotation={[0, 1.571, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame4"
//       geometry={nodes.frame4.geometry}
//       material={textureMaterial}
//       position={[-27.345, 2.691, 20.455]}
//       rotation={[0, 1.571, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame5"
//       geometry={nodes.frame5.geometry}
//       material={textureMaterial}
//       position={[-23.281, 2.691, 20.455]}
//       rotation={[0, 1.571, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame6"
//       geometry={nodes.frame6.geometry}
//       material={textureMaterial}
//       position={[-18.972, 2.691, 20.455]}
//       rotation={[0, 1.571, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame7"
//       geometry={nodes.frame7.geometry}
//       material={textureMaterial}
//       position={[-14.469, 2.812, 20.455]}
//       rotation={[0, 1.571, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame8"
//       geometry={nodes.frame8.geometry}
//       material={textureMaterial}
//       position={[-37.966, 2.806, 18.638]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame9"
//       geometry={nodes.frame9.geometry}
//       material={textureMaterial}
//       position={[-37.966, 3.518, -9.25]}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame10"
//       geometry={nodes.frame10.geometry}
//       material={textureMaterial}
//       position={[-37.966, 2.576, -10.866]}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame23"
//       geometry={nodes.frame23.geometry}
//       material={textureMaterial}
//       position={[-7.819, 2.812, 20.455]}
//       rotation={[0, 1.571, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame24"
//       geometry={nodes.frame24.geometry}
//       material={textureMaterial}
//       position={[24.238, 4.99, 20.455]}
//       rotation={[0, 1.571, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame25"
//       geometry={nodes.frame25.geometry}
//       material={textureMaterial}
//       position={[19.472, 3.806, 20.494]}
//       rotation={[0, 1.571, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame26"
//       geometry={nodes.frame26.geometry}
//       material={textureMaterial}
//       position={[17.527, 3.027, 20.494]}
//       rotation={[0, 1.571, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame27"
//       geometry={nodes.frame27.geometry}
//       material={textureMaterial}
//       position={[15.521, 2.15, 20.494]}
//       rotation={[0, 1.571, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame28"
//       geometry={nodes.frame28.geometry}
//       material={textureMaterial}
//       position={[28.722, 4.662, 18.948]}
//       rotation={[Math.PI, 0, Math.PI]}
//     />
//   },
//   {
//     'mesh':
//     <mesh 
//       name="frame29"
//       geometry={nodes.frame29.geometry}
//       material={textureMaterial}
//       position={[28.722, 2.541, 18.481]}
//       rotation={[Math.PI, 0, Math.PI]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame30"
//       geometry={nodes.frame30.geometry}
//       material={textureMaterial}
//       position={[28.722, 7.359, 18.475]}
//       rotation={[Math.PI, 0, Math.PI]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame11"
//       geometry={nodes.frame11.geometry}
//       material={textureMaterial}
//       position={[-27.549, 2.691, 9.252]}
//       rotation={[-Math.PI / 2, 0, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame12"
//       geometry={nodes.frame12.geometry}
//       material={textureMaterial}
//       position={[-13.168, 2.59, 9.252]}
//       rotation={[-Math.PI / 2, 0, -Math.PI]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame13"
//       geometry={nodes.frame13.geometry}
//       material={textureMaterial}
//       position={[-28.712, 2.691, 9.252]}
//       rotation={[-Math.PI / 2, 0, -Math.PI]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame14"
//       geometry={nodes.frame14.geometry}
//       material={textureMaterial}
//       position={[-27.549, 2.59, -4.233]}
//       rotation={[-Math.PI / 2, 0, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame15"
//       geometry={nodes.frame15.geometry}
//       material={textureMaterial}
//       position={[-28.712, 2.59, -4.233]}
//       rotation={[-Math.PI / 2, 0, -Math.PI]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame16"
//       geometry={nodes.frame16.geometry}
//       material={textureMaterial}
//       position={[-12.008, 2.59, -4.248]}
//       rotation={[-Math.PI / 2, 0, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame17"
//       geometry={nodes.frame17.geometry}
//       material={textureMaterial}
//       position={[-13.168, 2.59, -4.248]}
//       rotation={[-Math.PI / 2, 0, -Math.PI]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame18"
//       geometry={nodes.frame18.geometry}
//       material={textureMaterial}
//       position={[-19.493, 2.608, 2.322]}
//       rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame19"
//       geometry={nodes.frame19.geometry}
//       material={textureMaterial}
//       position={[-19.493, 2.608, 3.483]}
//       rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame31"
//       geometry={nodes.frame31.geometry}
//       material={textureMaterial}
//       position={[2.738, 2.812, -27.651]}
//       rotation={[0, -Math.PI / 2, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame32"
//       geometry={nodes.frame32.geometry}
//       material={textureMaterial}
//       position={[-7.299, 2.812, -27.651]}
//       rotation={[0, -Math.PI / 2, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame33"
//       geometry={nodes.frame33.geometry}
//       material={textureMaterial}
//       position={[-37.966, 2.812, -19.36]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame20"
//       geometry={nodes.frame20.geometry}
//       material={textureMaterial}
//       position={[-12.709, 2.581, -14.193]}
//       rotation={[-Math.PI / 2, 0, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame21"
//       geometry={nodes.frame21.geometry}
//       material={textureMaterial}
//       position={[-12.709, 2.581, -19.653]}
//       rotation={[-Math.PI / 2, 0, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame22"
//       geometry={nodes.frame22.geometry}
//       material={textureMaterial}
//       position={[-12.709, 2.581, -25.258]}
//       rotation={[-Math.PI / 2, 0, 0]}
//     />
//   },
//   {
//     'mesh':
//     <mesh
//       name="frame34"
//       geometry={nodes.frame34.geometry}
//       material={textureMaterial}
//       position={[-13.193, 2.812, -19.36]}
//       rotation={[Math.PI, 0, Math.PI]}
//     />
//   }, 
// ]

      //DOWN FRAMES
    //   <mesh
    //   name="frame35"
    //   geometry={nodes.frame35.geometry}
    //   material={textureMaterial}
    //   position={[-12.008, 7.388, 9.252]}
    //   rotation={[-Math.PI / 2, 0, 0]}
    // />
    // <mesh
    //   name="frame36"
    //   geometry={nodes.frame36.geometry}
    //   material={textureMaterial}
    //   position={[-13.168, 7.388, 9.252]}
    //   rotation={[-Math.PI / 2, 0, -Math.PI]}
    // />
    // <mesh
    //   name="frame37"
    //   geometry={nodes.frame37.geometry}
    //   material={textureMaterial}
    //   position={[-27.549, 7.388, 9.252]}
    //   rotation={[-Math.PI / 2, 0, 0]}
    // />
    // <mesh
    //   name="frame38"
    //   geometry={nodes.frame38.geometry}
    //   material={textureMaterial}
    //   position={[-28.693, 7.388, 9.151]}
    //   rotation={[-Math.PI / 2, 0, -Math.PI]}
    // />
    // <mesh
    //   name="frame39"
    //   geometry={nodes.frame39.geometry}
    //   material={textureMaterial}
    //   position={[-27.549, 7.385, -4.233]}
    //   rotation={[-Math.PI / 2, 0, 0]}
    // />
    // <mesh
    //   name="frame40"
    //   geometry={nodes.frame40.geometry}
    //   material={textureMaterial}
    //   position={[-28.712, 7.385, -4.233]}
    //   rotation={[-Math.PI / 2, 0, -Math.PI]}
    // />
    // <mesh
    //   name="frame41"
    //   geometry={nodes.frame41.geometry}
    //   material={textureMaterial}
    //   position={[-12.008, 7.388, -4.248]}
    //   rotation={[-Math.PI / 2, 0, 0]}
    // />
    // <mesh
    //   name="frame42"
    //   geometry={nodes.frame42.geometry}
    //   material={textureMaterial}
    //   position={[-13.168, 7.388, -4.248]}
    //   rotation={[-Math.PI / 2, 0, -Math.PI]}
    // />
    // <mesh
    //   name="frame43"
    //   geometry={nodes.frame43.geometry}
    //   material={textureMaterial}
    //   position={[-7.819, 7.516, 20.455]}
    //   rotation={[0, 1.571, 0]}
    // />
    // <mesh
    //   name="frame44"
    //   geometry={nodes.frame44.geometry}
    //   material={textureMaterial}
    //   position={[23.334, 7.516, -27.651]}
    //   rotation={[0, -Math.PI / 2, 0]}
    // />
    // <mesh
    //   name="frame45"
    //   geometry={nodes.frame45.geometry}
    //   material={textureMaterial}
    //   position={[-7.819, 7.516, -27.651]}
    //   rotation={[0, -Math.PI / 2, 0]}
    // />
