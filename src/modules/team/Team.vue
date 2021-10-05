<template>
    <div class="team">
        <IntroCard
            :description="$t('team.description')"
            :image="require('@/assets/img/team/team.svg')"
            :title="$t('team.title')"
        />

        <!-- Electrical engineers -->
        <h1 class="title">{{ $t("team.electrical") }}</h1>
        <MemberCard
            :degree="$t('team.eeDegree')"
            linkedin="https://www.linkedin.com/in/karlwiesmayer/"
            name="Karl Wiesmayer"
            :quote="$t('team.karl')"
        />

        <!-- Computer Scientists -->
        <h1 class="title">{{ $t("team.computer") }}</h1>
        <MemberCard
            :degree="$t('team.csDegree')"
            class="inner-card"
            github="https://github.com/failipp"
            linkedin="https://www.linkedin.com/in/philippscheede/"
            name="Philipp Scheede"
            :quote="$t('team.philipp')"
        />
        <MemberCard
            :degree="$t('team.csDegree')"
            class="inner-card"
            github="https://github.com/samuelhuebner"
            linkedin="https://www.linkedin.com/in/samuel-h%C3%BCbner-54630a1a1/"
            name="Samuel Hübner"
            :quote="$t('team.samu')"
        />
        <MemberCard
            :degree="$t('team.csDegree')"
            class="inner-card"
            github="https://github.com/stefan-rink"
            linkedin="https://www.linkedin.com/in/stefanrink/"
            name="Stefan Rink"
            :quote="$t('team.stefan')"
        />
        <MemberCard
            :degree="$t('team.csDegree')"
            github="https://github.com/Timbogen"
            linkedin="https://www.linkedin.com/in/tim-niederer-44992420b/"
            name="Tim Niederer"
            :quote="$t('team.tim')"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IntroCard from "@/components/IntroCard.vue";
import MemberCard from "@/modules/team/components/MemberCard.vue";

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

    img {
        max-width: 600px;
        width: 100%;
    }

    h3 {
        margin-top: 24px;
    }
}

.inner-card {
    margin-bottom: @normal-padding;
}
</style>
