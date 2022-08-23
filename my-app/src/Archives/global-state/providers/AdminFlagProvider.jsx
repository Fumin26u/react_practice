import {createContext, useState} from "react";

// contextの器の作成
export const AdminFlagContext = createContext({

});

export const AdminFlagProvider = props => {
    const {children} = props;

    // 管理者フラグ
    const [isAdmin, setIsAdmin] = useState(false);

    // 動作確認用
    // const sampleObj = {sampleValue: "Test"};

    // AdminFlagContext内のProviderでChildrenを囲む
    return (
        // ContextオブジェクトとしてisAdminとsetIsAdminを設定
        <AdminFlagContext.Provider value={{isAdmin, setIsAdmin}}>
            {children}
        </AdminFlagContext.Provider>
    );
};