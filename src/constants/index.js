
const { nodes, materials } = useGLTF("/project1.glb");

export const frames = [
    {
        'name':"frame21001",
        'geometry':nodes.frame21001.geometry,
        'material':nodes.frame21001.material,
        'position':[-12.709, 2.581, -19.653],
        'rotation':[-Math.PI / 2, 0, 0],
    },
    {
        'name':"circleFrame001",
        'geometry':nodes.circleFrame001.geometry,
        'material':nodes.circleFrame001.material,
        'position':[20.121, 3.227, -11.606],
        'rotation':[Math.PI / 2, 0, 0],
    },
    {
        'name':"frame2001",
        'geometry':nodes.frame2001.geometry,
        'material':nodes.frame2001.material,
        'position':[-35.714, 2.691, 20.455],
        'rotation':[0, 1.571, 0],
    },

  
]
