<template>
  <v-row no-gutters class="upsert-page">
    <v-col md="6" offset-md="3" sm="8" offset-sm="2">
      <div class="page-header">
        <h1>New Curriculum</h1>
        <v-btn @click="saveCurriculum">Save</v-btn>
      </div>
      <v-form class="upsert-form">
        <v-row>
          <v-col cols="3">
            <v-subheader>Name</v-subheader>
          </v-col>
          <v-col cols="9">
            <v-text-field v-model="name"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-subheader>Goal</v-subheader>
          </v-col>
          <v-col cols="9">
            <v-text-field v-model="goal"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-textarea
              outlined
              name="description"
              label="Description"
              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              v-model="description"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-card class="mx-auto" outlined v-for="(section, k) in sections" :key="k">
          <v-card-title>My curriculum #{{ k + 1 }}</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="3">
                <v-subheader>Name</v-subheader>
              </v-col>
              <v-col cols="9">
                <v-text-field v-model="section.name"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <v-subheader>Goal</v-subheader>
              </v-col>
              <v-col cols="9">
                <v-text-field v-model="section.goal"></v-text-field>
              </v-col>
            </v-row>
            <v-card class="resources-card">
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <v-text-field placeholder="Enter Resource Link"
                     v-model="section.newResource" @keyup.enter="addItem('resource', k)" />
                  </v-col>
                </v-row>
                <v-row v-if="section.resources.length">
                  <v-col cols="12">
                    <v-card>
                      <template v-for="(resource, m) in section.resources">
                        <v-list-item :key="m">
                          <v-list-item-content>
                            {{ resource }}
                          </v-list-item-content>
                          <v-list-item-action>
                            <v-icon color="red lighten-2" @click="deleteItem('resources', k, m)">
                              mdi-trash-can
                            </v-icon>
                          </v-list-item-action>
                        </v-list-item>
                      </template>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
            <v-card class="projects-card">
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <v-text-field placeholder="Enter Projects Link"
                     v-model="section.newProject" @keyup.enter="addItem('project', k)" />
                  </v-col>
                </v-row>
                <v-row v-if="section.projects.length">
                  <v-col cols="12">
                    <v-card>
                      <template v-for="(project, m) in section.projects">
                        <v-list-item :key="m">
                          <v-list-item-content>
                            {{ project }}
                          </v-list-item-content>
                          <v-list-item-action>
                            <v-icon color="red lighten-2" @click="deleteItem('projects', k, m)">
                              mdi-trash-can
                            </v-icon>
                          </v-list-item-action>
                        </v-list-item>
                      </template>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
        <v-row class="upsert-subtn">
          <v-col cols="12">
            <v-btn  @click="addSection">Add Section</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CreateCurriculum',
  data () {
    return {
      name: '',
      goal: '',
      description: '',
      sections: [{
        name: '',
        goal: '',
        newResource: '',
        resources: [],
        newProject: '',
        projects: []
      }]
    }
  },
  methods: {
    ...mapActions(['postCurriculum']),
    saveCurriculum () {
      const { name, goal, description, sections } = this
      const newSections = sections.map((section, i) => {
        const updatedSection = { ...section }
        delete updatedSection.newResource
        delete updatedSection.newProject
        return updatedSection
      })
      const curriculum = { name, goal, description, sections: newSections }
      this.postCurriculum(curriculum)
    },
    addSection () {
      this.sections.push({
        name: '',
        goal: '',
        resources: [],
        projects: []
      })
    },
    addItem (type, i) {
      const key = `new${type[0].toUpperCase()}${type.slice(1)}`
      const item = this.sections[i][key]
      this.sections[i][`${type}s`].push(item)
      this.sections[i][key] = ''
    },
    deleteItem (type, sectionIndex, itemIndex) {
      this.sections[sectionIndex][type].splice(itemIndex, 1)
    }
  }
}
</script>
