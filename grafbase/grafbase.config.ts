import { g,auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name : g.string(),
  email:g.string().unique(),
  avatarUrl :g.url(),
  description :g.string().optional(),
  githubUrl : g.url().optional(),
  linkedinUrl :g.url().optional(),
  projects:g.relation(()=>Project).list().optional(),
});


const Project = g.model('Project',{
  title:g.string(),
  description : g.string(),
  image:g.url(),
  liveSiteUrl : g.url(),
  githunUrl : g.url(),
  category : g.string().search(),
  createdBy:g.relation(()=>User)
})



export default config({
  schema: g,
  auth: {

    rules: (rules) => {
      rules.public()
    },
  },
})
