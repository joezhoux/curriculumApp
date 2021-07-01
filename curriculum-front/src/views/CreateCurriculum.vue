<template>
  <v-row no-gutters class="upsert-page">
    <v-col md="6" offset-md="3" sm="8" offset-sm="2">
      <div class="page-header">
        <h1>New Curriculum</h1>
        <v-btn>Save</v-btn>
      </div>
      <v-form class="upsert-form">
        <v-row>
          <v-col cols="3">
            <v-subheader>Name</v-subheader>
          </v-col>
          <v-col cols="9">
            <v-text-field></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-subheader>Goal</v-subheader>
          </v-col>
          <v-col cols="9">
            <v-text-field></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-textarea
              outlined
              name="description"
              label="Description"
              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
            ></v-textarea>
          </v-col>
        </v-row>
        <v-card class="mx-auto" outlined>
          <v-card-title>My curriculum #1</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="3">
                <v-subheader>Name</v-subheader>
              </v-col>
              <v-col cols="9">
                <v-text-field></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <v-subheader>Goal</v-subheader>
              </v-col>
              <v-col cols="9">
                <v-text-field></v-text-field>
              </v-col>
            </v-row>
            <v-card class="resources-card">
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <v-text-field placeholder="Enter Resource Link"></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <p>List of resources</p>
                    <p>List of resources</p>
                    <p>List of resources</p>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
            <v-card class="projects-card">
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <v-text-field placeholder="Enter Projects Link"></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <p>List of resources</p>
                    <p>List of resources</p>
                    <p>List of resources</p>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
        <v-row class="upsert-subtn">
          <v-col cols="12">
            <v-btn>Add Section</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CreateCurriculum'
}
</script>
