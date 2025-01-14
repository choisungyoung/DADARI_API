const Sequelize = require('sequelize');

module.exports = class SubscriptionService extends Sequelize.Model {
    // User 모델을 만들고 모듈로 exports함(User 모델은 Sequelize.Model을 확장한 클래스)
    static init(sequelize) {
        // 테이블에 대한 설정 <-> static associate: 다른 모델과의 관계
        return super.init(
            {
                // super.init의 첫 번째 인수: 테이블에 대한 컬럼 설정
                nameEng: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                    unique: false,
                },
                nameKr: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                    unique: false,
                },
                defaultLogoPath: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                    unique: false,
                },
                detailLogoPath: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                    unique: false,
                },
                listLogoPath: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                    unique: false,
                },
                mainUrl: {
                    type: Sequelize.STRING(200),
                    allowNull: false,
                    unique: false,
                },
                policyUrl: {
                    type: Sequelize.STRING(200),
                    allowNull: false,
                    unique: false,
                },
                description: {
                    type: Sequelize.STRING(5000),
                    allowNull: true,
                    unique: false,
                },
                updateBy: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                    unique: false,
                },
                createBy: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                    unique: false,
                },
            },
            {
                // super.init의 두 번째 인수: 테이블 자체에 대한 설정(테이블 옵션)
                sequelize, // static init 메서드의 매개변수와 연결되는 옵션
                timestamps: true, // true: Sequelize가 자동으로 createdAt과 updatedAt 컬럼을 추가
                underscored: false, // true: create_at같이(스네이크 케이스), false: createdAt같이(캐멀 케이스)
                modelName: 'subscriptionService', // 모델 이름
                tableName: 'subscription_service', // 테이블 이름
                schema: 'dadari-db',
                paranoid: false, // 컬럼을 지워도 완전히 지워지지 않고 deletedAt이라는 컬럼이 생김(지운 시각이 기록됨)
                charset: 'utf8', // 한글 입력, 이모티콘까지 입력: utf8mb4
                collate: 'utf8_general_ci', // 한글 입력, 이모티콘까지 입력: utf8mb4_general_ci
            }
        );
    }
    static associate(db) {
        // 다른 모델과의 관계 <-> static init: 테이블에 대한 설정
        db.SubscriptionService.belongsTo(db.Category, { foreignKey: 'categoryId' });

        db.SubscriptionService.belongsToMany(db.Hashtag, {
            through: 'subscriptionServiceHashtag',
            foreignKey: 'subscriptionServiceId',
        });
    }
};
