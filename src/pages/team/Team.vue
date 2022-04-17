<template>
    <div class="team">
        <IntroCard
            :description="$t('team.description')"
            :image="require('@/assets/img/team/team.svg')"
            :title="$t('team.title')"
        />

        <!-- Electrical engineers -->
        <h1 class="title">{{ $t("team.members") }}</h1>
        <MemberCard
            :degree="$t('team.eeDegree')"
            class="inner-card"
            linkedin="https://www.linkedin.com/in/karlwiesmayer/"
            name="Karl Wiesmayer"
            :quote="$t('team.karl')"
            :image="require('@/assets/img/team/karl.jpg')"
        />
        <MemberCard
            :degree="$t('team.csDegree')"
            class="inner-card"
            github="https://github.com/failipp"
            linkedin="https://www.linkedin.com/in/philipp-scheede/"
            name="Philipp Scheede"
            :quote="$t('team.philipp')"
            :image="require('@/assets/img/team/philipp.jpg')"
        />
        <MemberCard
            :degree="$t('team.csDegree')"
            class="inner-card"
            github="https://github.com/samuelhuebner"
            linkedin="https://www.linkedin.com/in/samuel-h%C3%BCbner-54630a1a1/"
            name="Samuel Hübner"
            :quote="$t('team.samu')"
            :image="require('@/assets/img/team/samuel.jpg')"
        />
        <MemberCard
            :degree="$t('team.csDegree')"
            class="inner-card"
            github="https://github.com/stefan-rink"
            linkedin="https://www.linkedin.com/in/stefan-rink-bb8a34234/"
            name="Stefan Rink"
            :quote="$t('team.stefan')"
            :image="require('@/assets/img/team/stefan.jpg')"
        />
        <MemberCard
            :degree="$t('team.csDegree')"
            github="https://github.com/Timbogen"
            linkedin="https://www.linkedin.com/in/tim-niederer-44992420b/"
            name="Tim Niederer"
            :quote="$t('team.tim')"
            :image="require('@/assets/img/team/tim.jpg')"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IntroCard from "@/components/IntroCard.vue";
import MemberCard from "@/pages/team/components/MemberCard.vue";

export default defineComponent({
    name: "Team",
    components: {
        IntroCard,
        MemberCard,
    },
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars.less";

.team {
    max-width: @max-width;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: @normal-padding;
}

.inner-card {
    margin-bottom: @normal-padding;
}
</style>
