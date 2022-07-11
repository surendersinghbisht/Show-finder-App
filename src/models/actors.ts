 type Actor = {
    id:       number;
    url:      string;
    name:     string;
    birthday: Date;
    deathday: null;
    country:  Country;
    gender:   string;
    image:    Image;
    updated:  number;
}
 type Country =  {
    name:     string;
    code:     string;
    timezone: string;
}

 type Image = {
    medium:   string;
    original: string;
}

export default Actor;